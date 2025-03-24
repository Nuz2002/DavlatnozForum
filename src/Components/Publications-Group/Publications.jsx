// /src/components/Publications/Publications.js
import React, { useState, useEffect } from 'react';
import NewPostCard from './NewPostCard';
import PostCard from './PostCard';
import ProfileCard from './ProfileCard';
import { getUserProfile } from '../../api-calls/profileApi';
import { getAllPosts, createPost } from '../../api-calls/postApi';
import { createComment } from '../../api-calls/commentApi';
import { getUserProfileByUsername } from '../../api-calls/profileApi';

const MAX_VISIBLE_COMMENTS = 3;
const MAX_VISIBLE_REPLIES = 2;

export default function Publications() {
  const [expandedPostComments, setExpandedPostComments] = useState({});
  const [expandedReplies, setExpandedReplies] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);
  const [selectedUserForProfile, setSelectedUserForProfile] = useState(null);
  const [newPost, setNewPost] = useState('');
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  
  // Data states
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, postsData] = await Promise.all([
          getUserProfile(),
          getAllPosts()
        ]);
        setUser(userData);
        setPosts(postsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePostSubmit = async () => {
    if (newPost.trim()) {
      try {
        const createdPost = await createPost({ text: newPost });
        setPosts(prev => [createdPost, ...prev]);
        setNewPost('');
      } catch (err) {
        console.error('Failed to create post:', err);
      }
    }
  };

  // Keep other handlers (addComment, addReply, etc) unchanged...

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  }

  if (!user) {
    return <div className="text-center p-4">User not found</div>;
  }

  // ---------------------------------------------------------------------------
  // 3) Local Logic for Comments/Replies (Currently not wired to backend)
  // ---------------------------------------------------------------------------
  // If you want to use the backend for comments, you'd remove or adapt this
  // to call your commentApi (createComment, etc.). For now, this is local state.
  // Update imports at the top


// Replace existing addComment and addReply functions with:
const addComment = async (postId, commentText) => {
  try {
    // Call API to create comment
    const updatedPost = await createComment(postId, { text: commentText });
    
    // Update posts state with the fresh post data from backend
    setPosts(prevPosts => 
      prevPosts.map(post => post.id === postId ? updatedPost : post)
    );
  } catch (error) {
    console.error('Error adding comment:', error);
    // Optionally show error to user
  }
};

const addReply = async (postId, commentId, replyTargetUser, text) => {
  try {
    // Call API with parentCommentId to create reply
    const updatedPost = await createComment(postId, {
      text: text,
      parentCommentId: commentId
    });

    // Update state with fresh post data
    setPosts(prevPosts =>
      prevPosts.map(post => post.id === postId ? updatedPost : post)
    );
    setReplyingTo(null);
  } catch (error) {
    console.error('Error adding reply:', error);
    // Optionally show error to user
  }
};

  // Toggles for "show more" comments and replies
  const togglePostComments = (postId) => {
    setExpandedPostComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const toggleReplies = (commentId) => {
    setExpandedReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  // In Publications.js
const handleUserProfileClick = async (clickedUser) => {

  if (!clickedUser?.username) return;
  
  setIsProfileLoading(true);
  try {
    const fullProfile = await getUserProfileByUsername(clickedUser.username);
    console.log('[handleUserProfileClick] Fetched full profile:', fullProfile);


    if (fullProfile.accountType === true) {
      setSelectedUserForProfile(fullProfile);
    }
  } catch (error) {
    console.error('Profile load failed:', error);
  } finally {
    setIsProfileLoading(false);
  }

};


const closeProfileCard = () => {
  setSelectedUserForProfile(null);
};

  // ---------------------------------------------------------------------------
  // Render 
  // ---------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-blue-50 p-4 pt-12">
      <div className="max-w-2xl mx-auto">
        {/* New Post Card */}
        <NewPostCard
          user={user}
          newPost={newPost}
          setNewPost={setNewPost}
          handlePostSubmit={handlePostSubmit}
        />

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              togglePostComments={togglePostComments}
              expandedPostComments={expandedPostComments}
              MAX_VISIBLE_COMMENTS={MAX_VISIBLE_COMMENTS}
              addComment={addComment}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
              addReply={addReply}
              expandedReplies={expandedReplies}
              toggleReplies={toggleReplies}
              MAX_VISIBLE_REPLIES={MAX_VISIBLE_REPLIES}
              onUserProfileClick={handleUserProfileClick}
            />
          ))}
        </div>
      </div>

      {/* Profile modal (only shows for a public user) */}
      {selectedUserForProfile && (
        <ProfileCard user={selectedUserForProfile} onClose={closeProfileCard} isLoading={isProfileLoading}/>
      )}
    </div>
  );
}
