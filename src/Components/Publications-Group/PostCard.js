// /src/components/Publications/PostCard.js
import React from 'react';
import { FaRegComment } from 'react-icons/fa';
import CommentsList from './CommentsList';
import UserProfileButton from './UserProfileButton';

export default function PostCard({
  post,
  togglePostComments,
  expandedPostComments,
  MAX_VISIBLE_COMMENTS,
  addComment,
  replyingTo,
  setReplyingTo,
  addReply,
  expandedReplies,
  toggleReplies,
  MAX_VISIBLE_REPLIES,
  onUserProfileClick,
}) {
  const visibleComments = expandedPostComments[post.id]
    ? post.comments
    : post.comments.slice(0, MAX_VISIBLE_COMMENTS);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-blue-100">
      {/* Post header */}
      <div className="flex items-center mb-4">
        {/* Clickable avatar */}
        <UserProfileButton user={post.user} onClick={onUserProfileClick} />
        {/* Name & username next to it */}
        <div className="ml-2">
          <p className="text-blue-900 font-bold">{post.user.name}</p>
          <p className="text-sm text-blue-600">@{post.user.username}</p>
        </div>
      </div>

      {/* Post content */}
      <p className="text-blue-900 mb-4">{post.text}</p>

      {/* Comments section */}
      <div className="border-t border-blue-100 pt-4">
        <div className="flex items-center text-blue-600 mb-4">
          <FaRegComment className="mr-2" />
          <span className="font-medium">{post.comments.length} comments</span>
        </div>

        {/* Top-level comments */}
        <CommentsList
          comments={visibleComments}
          postId={post.id}
          replyingTo={replyingTo}
          setReplyingTo={setReplyingTo}
          addReply={addReply}
          expandedReplies={expandedReplies}
          toggleReplies={toggleReplies}
          MAX_VISIBLE_REPLIES={MAX_VISIBLE_REPLIES}
          onUserProfileClick={onUserProfileClick}
        />

        {/* Show more/less if needed */}
        {post.comments.length > MAX_VISIBLE_COMMENTS && !expandedPostComments[post.id] && (
          <button
            className="text-blue-600 text-sm mt-2"
            onClick={() => togglePostComments(post.id)}
          >
            Show more comments
          </button>
        )}
        {post.comments.length > MAX_VISIBLE_COMMENTS && expandedPostComments[post.id] && (
          <button
            className="text-blue-600 text-sm mt-2"
            onClick={() => togglePostComments(post.id)}
          >
            Show less comments
          </button>
        )}

        {/* New comment input */}
        <input
          type="text"
          className="w-full p-2 mt-4 bg-blue-50 rounded-lg border border-blue-100 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
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
  );
}
