
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import {
  getConversationUsers,
  startConversation,
  getMessagesPage,
  sendMessageToConversation,
} from "../api-calls/conversationApi";

import defaultProfilePic from "../assets/default-profile.png";
import VerifiedCheckmark from "../Components/VerifiedCheckMark";
import usePresence from "./hooks/usePresence";
import useMultiMessageSocket from "./hooks/useMultiMessageSocket";

export default function Messages() {
  // -- State --
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [conversationMap, setConversationMap] = useState({});
  const [messages, setMessages] = useState({});
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");

  // For sorting
  const [lastMessageTimes, setLastMessageTimes] = useState({});

  // For unread badges
  const [unreadCounts, setUnreadCounts] = useState({});

  // Router stuff
  const { username } = useParams();
  const location = useLocation();

  // Current user
  const token = localStorage.getItem("accessToken");
  let currentUser = null;
  if (token) {
    const decoded = jwtDecode(token);
    currentUser = { email: decoded.sub };
  }

  // Presence map
  const onlineMap = usePresence(currentUser?.email);

  // ==========================
  // Real-time message receive
  // ==========================
  useMultiMessageSocket(conversationMap, (incomingMsg) => {
    if (!incomingMsg || !incomingMsg.senderEmail) return;
  
    const peerEmail =
      incomingMsg.senderEmail === currentUser.email
        ? incomingMsg.recipientEmail || selectedUser?.email
        : incomingMsg.senderEmail;
  
    // Update unread badge if this message isn't for the selected chat
    if (peerEmail !== selectedUser?.email) {
      setUnreadCounts((prev) => ({
        ...prev,
        [peerEmail]: (prev[peerEmail] || 0) + 1,
      }));
    }
  
    setLastMessageTimes((prev) => ({
      ...prev,
      [peerEmail]: new Date(incomingMsg.sentAt),
    }));
  
    // Only add to chat if the message is part of the selected conversation
    if (peerEmail === selectedUser?.email || incomingMsg.senderEmail === currentUser.email) {
      setMessages((prev) => ({
        ...prev,
        [peerEmail]: [...(prev[peerEmail] || []), incomingMsg],
      }));
    }
  });
  

  // ==========================
  // Load conversation users
  // ==========================
  useEffect(() => {
    getConversationUsers()
      .then(async (data) => {
        setUsers(data);
        console.log("status", data.status);

        if (username) {
          let found = data.find((u) => u.username === username);

          // If not found in backend list, use user from Link state
          if (!found && location.state?.user) {
            found = location.state.user;
          }

          if (found) {
            setSelectedUser(found);
            setShowChat(true);
            await loadMessages(found);
          }
        } else if (data.length > 0) {
          setSelectedUser(data[0]);
          setShowChat(true);
          await loadMessages(data[0]);
        }
      })
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  // ==========================
  // Load messages for a user
  // ==========================
  const loadMessages = async (user) => {
    try {
      if (conversationMap[user.email]) {
        const convoId = conversationMap[user.email];
        const msgs = await getMessagesPage(convoId);
        setMessages((prev) => ({ ...prev, [user.email]: msgs }));
      } else {
        // Start a conversation if none exist
        const conversation = await startConversation(user.email);
        const convoId = conversation.id;

        setConversationMap((prev) => ({
          ...prev,
          [user.email]: convoId,
        }));

        const msgs = await getMessagesPage(convoId);
        setMessages((prev) => ({ ...prev, [user.email]: msgs }));
      }
    } catch (err) {
      console.error("Failed to load messages:", err);
    }
  };

  // ==========================
  // Send a message
  // ==========================
  const sendMessage = async () => {
    if (!input.trim() || !selectedUser || !currentUser) return;

    const conversationId = conversationMap[selectedUser.email];
    if (!conversationId) {
      console.error("Conversation ID not found.");
      return;
    }

    const messageText = input.trim();
    setInput("");

    try {
      // Send the message to the server
      const newMessage = await sendMessageToConversation(conversationId, messageText);

      // Update lastMessageTimes for sorting
      const now = new Date(newMessage.sentAt);
      setLastMessageTimes((prev) => ({
        ...prev,
        [selectedUser.email]: now,
      }));

      // (Don't manually add to `messages` => the WebSocket broadcast will do it)
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  // ==========================
  // Render
  // ==========================
  return (
    <div className="flex flex-col md:flex-row h-[calc(100dvh-4rem)] border-2 border-blue-100 rounded-xl shadow-lg overflow-hidden bg-white">
      {/* -- Users List -- */}
      <div
        className={`w-full md:w-1/4 bg-blue-50 p-4 overflow-y-auto border-b-2 md:border-r-2 border-blue-100 ${
          showChat ? "hidden md:block" : "block"
        }`}
      >
        <h2 className="text-blue-900 text-lg font-semibold mb-4 px-2">
          Conversations
        </h2>
        {users.length === 0 ? (
          <p className="text-blue-700 text-sm px-2 italic">
            You have no messages yet.
          </p>
        ) : (
          users
            .slice() // clone the array
            .sort((a, b) => {
              // Sort by latest message time
              const aTime = lastMessageTimes[a.email] || new Date(0);
              const bTime = lastMessageTimes[b.email] || new Date(0);
              return bTime - aTime; // newest first
            })
            .map((user) => {
              const isSelected = selectedUser?.email === user.email;
              const unreadCount = unreadCounts[user.email] || 0;

              return (
                <div
                  key={user.email}
                  className={`flex items-center p-2 sm:p-3 cursor-pointer rounded-xl transition-all mb-2 ${
                    isSelected
                      ? "bg-blue-100 shadow-inner"
                      : "hover:bg-blue-100/50"
                  }`}
                  onClick={async () => {
                    // Reset unread count for this user
                    setUnreadCounts((prev) => ({
                      ...prev,
                      [user.email]: 0,
                    }));
                    setSelectedUser(user);
                    setShowChat(true);
                    await loadMessages(user);
                  }}
                >
                  <div className="relative mr-3">
                  <img
                    src={user.photo || defaultProfilePic}
                    alt={user.username}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-200"
                  />
                  {user.status && <VerifiedCheckmark />}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-blue-900 font-medium text-sm sm:text-base">
                      {user.firstName || user.username}
                    </p>

                    {/* New badge right next to username */}
                    {unreadCount > 0 && (
                      <span className="bg-red-100 text-red-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm ml-24">
                        {unreadCount > 99 ? "99+" : unreadCount}
                      </span>
                    )}
                  </div>

                  {onlineMap[user.email]?.online ? (
                    <p className="text-green-600 text-xs sm:text-sm">Active now</p>
                  ) : (
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Last seen {onlineMap[user.email]?.lastSeen || "a while ago"}
                    </p>
                  )}
                </div>

                </div>
              );
            })
        )}
      </div>

      {/* -- Chat Area -- */}
      {selectedUser && (
        <div
          className={`flex-1 flex flex-col ${!showChat ? "hidden md:flex" : "flex"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b-2 border-blue-100">
            <div className="flex items-center">
              <button
                onClick={() => setShowChat(false)}
                className="md:hidden mr-3 text-blue-600 hover:text-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="relative mr-3">
                <img
                  src={selectedUser.photo || defaultProfilePic}
                  alt={selectedUser.username}
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-blue-200"
                />
                {selectedUser.status && <VerifiedCheckmark />}
              </div>

              <div>
                <h3 className="text-blue-900 font-semibold text-sm sm:text-base">
                  {selectedUser.firstName || selectedUser.username}
                </h3>
                {onlineMap[selectedUser.email]?.online ? (
                  <p className="text-green-600 text-xs sm:text-sm">Online</p>
                ) : (
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Last seen {onlineMap[selectedUser.email]?.lastSeen || "recently"}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages[selectedUser.email]
              ?.slice()
              .sort((a, b) => new Date(a.sentAt) - new Date(b.sentAt))
              .map((msg, index) => {
                const isMine = msg.senderEmail === currentUser?.email;
                return (
                  <div
                    key={index}
                    className={`flex ${
                      isMine ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex flex-col whitespace-pre-wrap break-words p-3 max-w-[85%] sm:max-w-lg rounded-2xl ${
                        isMine
                          ? "bg-teal-600 text-white rounded-br-none"
                          : "bg-blue-100 text-blue-900 rounded-bl-none"
                      } shadow-md`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p
                        className={`text-xs mt-2 self-end ${
                          isMine ? "text-teal-100" : "text-blue-600"
                        }`}
                      >
                        {new Date(msg.sentAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>


                );
              })}
          </div>

          {/* Input */}
          <div className="pt-4 p-4 border-t-2 border-blue-100">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 w-full px-4 py-2 sm:py-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all text-sm sm:text-base"
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="w-full sm:w-auto px-6 py-2 sm:py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
