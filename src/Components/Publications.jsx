import React, { useState } from "react";

const defaultProfilePic = "/images/default-profile.png"; // Default image for users without a profile picture

const Publications = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [user, setUser] = useState({
    name: "John Doe",
    username: "johndoe",
    photo: "", // Leave empty to test the default image
  });

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      setPosts([
        {
          id: Date.now(),
          text: newPost,
          comments: [],
          user,
        },
        ...posts,
      ]);
      setNewPost("");
    }
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { text: comment, user },
              ],
            }
          : post
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black p-4 pt-12">
      <div className="w-full max-w-xl bg-gray-100 p-4 rounded-lg shadow-lg">
        <div className="flex items-center mb-2">
          <img
            src={user.photo || defaultProfilePic}
            alt={user.name}
            className="w-10 h-10 rounded-full border mr-3"
          />
          <p className="font-bold">{user.name}</p>
        </div>
        <textarea
          className="w-full p-2 bg-gray-200 rounded text-black"
          rows="3"
          placeholder="Share your thoughts..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button
          className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>
      <div className="w-full max-w-xl mt-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
            <div className="flex items-center mb-2">
              <img
                src={post.user.photo || defaultProfilePic}
                alt={post.user.name}
                className="w-10 h-10 rounded-full border mr-3"
              />
              <div>
                <p className="font-bold">{post.user.name}</p>
                <p className="text-sm text-gray-500">@{post.user.username}</p>
              </div>
            </div>
            <p className="text-black">{post.text}</p>
            <div className="mt-2">
              {post.comments.map((comment, index) => (
                <div key={index} className="flex items-start mt-2">
                  <img
                    src={comment.user.photo || defaultProfilePic}
                    alt={comment.user.name}
                    className="w-8 h-8 rounded-full border mr-2"
                  />
                  <div>
                    <p className="font-bold text-sm">{comment.user.name}</p>
                    <p className="text-gray-600 text-sm">{comment.text}</p>
                  </div>
                </div>
              ))}
              <input
                type="text"
                className="w-full p-2 mt-2 bg-gray-200 rounded text-black"
                placeholder="Add a comment..."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value.trim()) {
                    addComment(post.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
