import React, { useState } from 'react';

const Publications = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      setPosts([{ id: Date.now(), text: newPost, comments: [] }, ...posts]);
      setNewPost('');
    }
  };

  const addComment = (postId, comment) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, comments: [...post.comments, comment] } : post));
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black p-4 pt-12">
      <h1 className="text-4xl font-bold text-yellow-500 mb-6">Publications</h1>
      <div className="w-full max-w-xl bg-gray-100 p-4 rounded-lg shadow-lg">
        <textarea 
          className="w-full p-2 bg-gray-200 rounded text-black" 
          rows="3" 
          placeholder="Share your thoughts..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button 
          className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>
      <div className="w-full max-w-xl mt-6">
        {posts.map(post => (
          <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
            <p className="text-black">{post.text}</p>
            <div className="mt-2">
              {post.comments.map((comment, index) => (
                <p key={index} className="text-gray-600 text-sm">- {comment}</p>
              ))}
              <input 
                type="text" 
                className="w-full p-2 mt-2 bg-gray-200 rounded text-black" 
                placeholder="Add a comment..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    addComment(post.id, e.target.value);
                    e.target.value = '';
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
