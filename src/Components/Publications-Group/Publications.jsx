// // /src/components/Publications/Publications.js
// import React, { useState } from 'react';
// import NewPostCard from './NewPostCard';
// import PostCard from './PostCard';
// import ProfileCard from './ProfileCard';
// import { getUserProfile } from '../../api-calls/profileApi';

// const defaultProfilePic = 'https://i.pravatar.cc/40';

// // How many comments/replies to show initially before expanding
// const MAX_VISIBLE_COMMENTS = 3;
// const MAX_VISIBLE_REPLIES = 2;

// export default function Publications() {
//   // Track whether all comments for a post are visible
//   const [expandedPostComments, setExpandedPostComments] = useState({});
//   // Track which comment’s replies are fully visible (keyed by comment id)
//   const [expandedReplies, setExpandedReplies] = useState({});
//   // State for tracking which comment/reply is being replied to.
//   const [replyingTo, setReplyingTo] = useState(null);

//   // State to manage which user’s profile card is open
//   const [selectedUserForProfile, setSelectedUserForProfile] = useState(null);

//   // Sample user: The currently logged in user
//   const [user] = useState({
//     name: 'John Doe',
//     username: 'johndoe',
//     photo: 'https://i.pravatar.cc/40?img=8',
//     accountType: 'public', // or 'private'
//     profession: 'Therapist',
//     bio: 'Passionate about mindfulness and self-care.',
//   });

//   // Our sample posts with unique IDs, now including accountType, profession, and bio
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       text: 'Starting my mental health journey - any tips for managing anxiety?',
//       comments: [
//         {
//           id: 101,
//           text: 'Mindfulness meditation helped me a lot! Start with just 5 minutes a day.',
//           user: {
//             name: 'Sarah',
//             username: 'sarah_m',
//             photo: 'https://i.pravatar.cc/40?img=3',
//             accountType: 'public',
//             profession: 'Yoga Instructor',
//             bio: 'Teaching yoga and meditation for over 5 years.',
//           },
//           replies: [
//             {
//               id: 201,
//               text: 'Second this! The Headspace app has great beginner courses.',
//               user: {
//                 name: 'Mike',
//                 username: 'mike_t',
//                 photo: 'https://i.pravatar.cc/40?img=4',
//                 accountType: 'public',
//                 profession: 'Fitness Coach',
//                 bio: 'Helping people stay fit and healthy.',
//               },
//             },
//           ],
//         },
//         {
//           id: 102,
//           text: 'Regular exercise and maintaining a sleep schedule made a big difference for me.',
//           user: {
//             name: 'David',
//             username: 'david_r',
//             photo: 'https://i.pravatar.cc/40?img=5',
//             accountType: 'public',
//             profession: 'Personal Trainer',
//             bio: 'Focuses on holistic approaches to wellness.',
//           },
//           replies: [
//             {
//               id: 202,
//               text: 'How many hours of sleep do you recommend?',
//               user: {
//                 name: 'Lisa',
//                 username: 'lisa_k',
//                 photo: 'https://i.pravatar.cc/40?img=6',
//                 accountType: 'private',
//                 profession: 'Freelancer',
//                 bio: 'Loves reading and exploring nature.',
//               },
//               replyTo: {
//                 name: 'David',
//                 username: 'david_r',
//                 photo: 'https://i.pravatar.cc/40?img=5',
//                 accountType: 'public',
//                 profession: 'Personal Trainer',
//                 bio: 'Focuses on holistic approaches to wellness.',
//               },
//             },
//             {
//               id: 203,
//               text: 'Aim for 7-9 hours. Consistency is key!',
//               user: {
//                 name: 'David',
//                 username: 'david_r',
//                 photo: 'https://i.pravatar.cc/40?img=5',
//                 accountType: 'public',
//                 profession: 'Personal Trainer',
//                 bio: 'Focuses on holistic approaches to wellness.',
//               },
//               replyTo: {
//                 name: 'David',
//                 username: 'david_r',
//                 photo: 'https://i.pravatar.cc/40?img=5',
//                 accountType: 'public',
//                 profession: 'Personal Trainer',
//                 bio: 'Focuses on holistic approaches to wellness.',
//               },
//             },
//           ],
//         },
//       ],
//       user: {
//         name: 'Emma',
//         username: 'emma_j',
//         photo: 'https://i.pravatar.cc/40?img=1',
//         accountType: 'public',
//         profession: 'Content Creator',
//         bio: 'Sharing stories about personal growth and mental wellness.',
//       },
//     },
//     {
//       id: 2,
//       text: "Celebrating 6 months of consistent therapy! 🎉 It's okay to ask for help.",
//       comments: [
//         {
//           id: 103,
//           text: 'So proud of you! This is inspiring 💛',
//           user: {
//             name: 'John',
//             username: 'john_d',
//             photo: 'https://i.pravatar.cc/40?img=7',
//             accountType: 'private',
//             profession: 'Accountant',
//             bio: 'Numbers by day, gaming by night.',
//           },
//           replies: [],
//         },
//       ],
//       user: {
//         name: 'Alex',
//         username: 'alex_m',
//         photo: 'https://i.pravatar.cc/40?img=2',
//         accountType: 'public',
//         profession: 'Designer',
//         bio: 'Designing user-friendly experiences.',
//       },
//     },
//   ]);

//   const [newPost, setNewPost] = useState('');

//   // Adds a new post at the top of the feed
//   const handlePostSubmit = () => {
//     if (newPost.trim()) {
//       setPosts([
//         {
//           id: Date.now(),
//           text: newPost,
//           comments: [],
//           user,
//         },
//         ...posts,
//       ]);
//       setNewPost('');
//     }
//   };

//   // Adds a new comment to a post
//   const addComment = (postId, comment) => {
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               comments: [
//                 ...post.comments,
//                 { id: Date.now(), text: comment, user, replies: [] },
//               ],
//             }
//           : post
//       )
//     );
//   };

//   // Adds a reply to a comment
//   const addReply = (postId, commentId, replyTargetUser, text) => {
//     setPosts((prev) =>
//       prev.map((post) => {
//         if (post.id !== postId) return post;
//         return {
//           ...post,
//           comments: post.comments.map((comment) => {
//             if (comment.id !== commentId) return comment;
//             const newReply = {
//               id: Date.now(),
//               text,
//               user,
//               replyTo: replyTargetUser || null,
//             };
//             return {
//               ...comment,
//               replies: [...(comment.replies || []), newReply],
//             };
//           }),
//         };
//       })
//     );
//     setReplyingTo(null);
//   };

//   const togglePostComments = (postId) => {
//     setExpandedPostComments((prev) => ({
//       ...prev,
//       [postId]: !prev[postId],
//     }));
//   };

//   const toggleReplies = (commentId) => {
//     setExpandedReplies((prev) => ({
//       ...prev,
//       [commentId]: !prev[commentId],
//     }));
//   };

//   // Handles showing the profile card for a user (only if public)
//   const handleUserProfileClick = (clickedUser) => {
//     if (clickedUser && clickedUser.accountType === 'public') {
//       setSelectedUserForProfile(clickedUser);
//     }
//   };

//   const closeProfileCard = () => {
//     setSelectedUserForProfile(null);
//   };

//   return (
//     <div className="min-h-screen bg-blue-50 p-4 pt-12">
//       <div className="max-w-2xl mx-auto">
//         {/* New Post Card */}
//         <NewPostCard
//           user={user}
//           newPost={newPost}
//           setNewPost={setNewPost}
//           handlePostSubmit={handlePostSubmit}
//         />

//         {/* Posts Feed */}
//         <div className="space-y-6">
//           {posts.map((post) => (
//             <PostCard
//               key={post.id}
//               post={post}
//               togglePostComments={togglePostComments}
//               expandedPostComments={expandedPostComments}
//               MAX_VISIBLE_COMMENTS={MAX_VISIBLE_COMMENTS}
//               addComment={addComment}
//               replyingTo={replyingTo}
//               setReplyingTo={setReplyingTo}
//               addReply={addReply}
//               expandedReplies={expandedReplies}
//               toggleReplies={toggleReplies}
//               MAX_VISIBLE_REPLIES={MAX_VISIBLE_REPLIES}
//               onUserProfileClick={handleUserProfileClick}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Profile modal (only shows for a public user) */}
//       {selectedUserForProfile && (
//         <ProfileCard user={selectedUserForProfile} onClose={closeProfileCard} />
//       )}
//     </div>
//   );
// }

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
    if (fullProfile.accountType === 'public') {
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
