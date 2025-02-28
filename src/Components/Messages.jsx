import { useState } from "react";

const users = [
  { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/40?img=3" },
];

export default function Messages() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), { text: input, sent: true }],
    }));
    setInput("");
    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [selectedUser.id]: [...(prev[selectedUser.id] || []), { text: "Got it!", sent: false }],
      }));
    }, 1000);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] border-2 border-blue-100 rounded-xl shadow-lg overflow-hidden bg-white">
      {/* Users List */}
      <div className="w-1/4 bg-blue-50 p-4 overflow-y-auto border-r-2 border-blue-100">
        <h2 className="text-blue-900 text-lg font-semibold mb-4 px-2">Conversations</h2>
        {users.map((user) => (
          <div
            key={user.id}
            className={`flex items-center p-3 cursor-pointer rounded-xl transition-all mb-2 ${
              selectedUser.id === user.id 
                ? "bg-blue-100 shadow-inner" 
                : "hover:bg-blue-100/50"
            }`}
            onClick={() => setSelectedUser(user)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full mr-3 border-2 border-blue-200"
            />
            <div>
              <p className="text-blue-900 font-medium">{user.name}</p>
              <p className="text-blue-600 text-sm">Active now</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex flex-col flex-1 p-4">
        {/* Header */}
        <div className="flex items-center pb-4 border-b-2 border-blue-100 mb-4">
          <img
            src={selectedUser.avatar}
            alt={selectedUser.name}
            className="w-12 h-12 rounded-full border-2 border-blue-200 mr-3"
          />
          <div>
            <h3 className="text-blue-900 font-semibold">{selectedUser.name}</h3>
            <p className="text-blue-600 text-sm">Online</p>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages[selectedUser.id]?.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 max-w-md rounded-2xl ${
                  msg.sent
                    ? "bg-teal-600 text-white rounded-br-none"
                    : "bg-blue-100 text-blue-900 rounded-bl-none"
                } shadow-md transition-all duration-200`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sent ? "text-teal-100" : "text-blue-600"}`}>
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="pt-4 border-t-2 border-blue-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all"
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors shadow-md flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}