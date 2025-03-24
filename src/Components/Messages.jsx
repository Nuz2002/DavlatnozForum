import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getConversationUsers,
  startConversation,
  getMessagesPage,
} from "../api-calls/conversationApi";
import defaultProfilePic from "../assets/default-profile.png";
import { jwtDecode } from "jwt-decode";

export default function Messages() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [conversationMap, setConversationMap] = useState({});
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);
  const { username } = useParams();

  const token = localStorage.getItem("accessToken");

  let currentUser = null;
  if (token) {
    const decoded = jwtDecode(token);
    console.log("🔑 JWT decoded:", decoded);
    // Using email from the token's sub field as the identity.
    currentUser = {
      email: decoded.sub,
    };
  }

  useEffect(() => {
    getConversationUsers()
      .then(async (data) => {
        setUsers(data);

        if (username) {
          const found = data.find((u) => u.username === username);
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
  }, [username]);

  const loadMessages = async (user) => {
    try {
      if (conversationMap[user.email]) {
        const convoId = conversationMap[user.email];
        const msgs = await getMessagesPage(convoId);
        setMessages((prev) => ({ ...prev, [user.email]: msgs }));
      } else {
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

  const sendMessage = () => {
    if (!input.trim() || !selectedUser || !currentUser) return;

    const newMessage = {
      text: input,
      senderUsername: currentUser.email,
      sentAt: new Date().toISOString(),
    };

    setMessages((prev) => ({
      ...prev,
      [selectedUser.email]: [
        ...(prev[selectedUser.email] || []),
        newMessage,
      ],
    }));

    setInput("");

    // Simulated reply (for testing only)
    setTimeout(() => {
      const fakeReply = {
        text: "Got it!",
        senderUsername: selectedUser.email,
        sentAt: new Date().toISOString(),
      };

      setMessages((prev) => ({
        ...prev,
        [selectedUser.email]: [
          ...(prev[selectedUser.email] || []),
          fakeReply,
        ],
      }));
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100dvh-4rem)] border-2 border-blue-100 rounded-xl shadow-lg overflow-hidden bg-white">
      {/* Users List */}
      <div
        className={`w-full md:w-1/4 bg-blue-50 p-4 overflow-y-auto border-b-2 md:border-r-2 border-blue-100 ${
          showChat ? "hidden md:block" : "block"
        }`}
      >
        <h2 className="text-blue-900 text-lg font-semibold mb-4 px-2">
          Conversations
        </h2>
        {users.map((user) => (
          <div
            key={user.email}
            className={`flex items-center p-2 sm:p-3 cursor-pointer rounded-xl transition-all mb-2 ${
              selectedUser?.email === user.email
                ? "bg-blue-100 shadow-inner"
                : "hover:bg-blue-100/50"
            }`}
            onClick={async () => {
              setSelectedUser(user);
              setShowChat(true);
              await loadMessages(user);
            }}
          >
            <img
              src={user.photo || defaultProfilePic}
              alt={user.username}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 border-2 border-blue-200"
            />
            <div>
              <p className="text-blue-900 font-medium text-sm sm:text-base">
                {user.firstName || user.username}
              </p>
              <p className="text-blue-600 text-xs sm:text-sm">Active now</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      {selectedUser && (
        <div className={`flex-1 flex flex-col ${!showChat ? "hidden md:flex" : "flex"}`}>
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
              <img
                src={selectedUser.photo || defaultProfilePic}
                alt={selectedUser.username}
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-blue-200 mr-3"
              />
              <div>
                <h3 className="text-blue-900 font-semibold text-sm sm:text-base">
                  {selectedUser.firstName || selectedUser.username}
                </h3>
                <p className="text-blue-600 text-xs sm:text-sm">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages[selectedUser.email]
              ?.slice() // clone the array to avoid mutating original
              .sort((a, b) => new Date(a.sentAt) - new Date(b.sentAt)) // sort ascending by sentAt
              .map((msg, index) => {
                const isMine = msg.senderEmail === currentUser?.email;
                return (
                  <div key={index} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`p-3 max-w-[90%] sm:max-w-md rounded-2xl ${
                        isMine
                          ? "bg-teal-600 text-white rounded-br-none"
                          : "bg-blue-100 text-blue-900 rounded-bl-none"
                      } shadow-md transition-all duration-200`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${isMine ? "text-teal-100" : "text-blue-600"}`}>
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
