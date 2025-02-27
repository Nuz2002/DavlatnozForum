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
    <div className="flex h-screen border rounded-xl shadow-md overflow-hidden">
      {/* Users List */}
      <div className="w-1/4 bg-gray-100 dark:bg-gray-800 p-4 overflow-y-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className={`flex items-center p-2 cursor-pointer rounded-lg transition-colors ${
              selectedUser.id === user.id 
                ? "bg-gray-300 dark:bg-gray-700" 
                : "hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
            onClick={() => setSelectedUser(user)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-gray-900 dark:text-white">{user.name}</span>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex flex-col flex-1 bg-white dark:bg-gray-900 p-4">
        {/* Messages Container */}
        <div className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-900 rounded-lg border mb-4">
          {messages[selectedUser.id]?.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 max-w-xs rounded-lg ${
                msg.sent
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center p-2 border-t dark:border-gray-700">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 mr-2 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
