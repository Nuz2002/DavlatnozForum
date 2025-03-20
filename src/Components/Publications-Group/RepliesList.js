// /src/components/Publications/RepliesList.js
import React from 'react';
import ReplyInput from './ReplyInput';
import UserProfileButton from './UserProfileButton';

export default function RepliesList({
  replies = [],
  postId,
  parentCommentId,
  replyingTo,
  setReplyingTo,
  addReply,
  expandedReplies,
  toggleReplies,
  MAX_VISIBLE_REPLIES,
  onUserProfileClick,
}) {
  const isExpanded = expandedReplies[parentCommentId];
  const visibleReplies = isExpanded ? replies : replies.slice(0, MAX_VISIBLE_REPLIES);

  return (
    <div className="ml-4 mt-2">
      {visibleReplies.map((reply) => (
        <div key={reply.id} className="mb-2">
          <div className="flex items-start">
            {/* Clickable avatar */}
            <UserProfileButton user={reply.user} onClick={onUserProfileClick} />
            <div className="flex-1 ml-2">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-900">{reply.user.username}</p>
                {reply.replyTo && (
                  <p className="text-xs text-gray-500">
                    Replying to @{reply.replyTo.username}
                  </p>
                )}
                <p className="text-blue-800">{reply.text}</p>
              </div>

              {/* Reply button for a reply */}
              <button
                className="text-blue-600 text-sm mt-1"
                onClick={() =>
                  setReplyingTo({
                    postId,
                    commentId: parentCommentId,
                    replyId: reply.id,
                  })
                }
              >
                Reply
              </button>

              {/* Inline reply input for replying to a specific reply */}
              {replyingTo &&
                replyingTo.postId === postId &&
                replyingTo.commentId === parentCommentId &&
                replyingTo.replyId === reply.id && (
                  <div className="mt-2">
                    <ReplyInput
                      inputKey={`reply-input-${postId}-${parentCommentId}-${reply.id}`}
                      placeholder="Write a reply..."
                      onSubmit={(text) => addReply(postId, parentCommentId, reply.user, text)}
                    />
                  </div>
                )}
            </div>
          </div>
        </div>
      ))}

      {/* Show more/less replies if needed */}
      {replies.length > MAX_VISIBLE_REPLIES && !isExpanded && (
        <button
          className="text-blue-600 text-sm mt-1"
          onClick={() => toggleReplies(parentCommentId)}
        >
          Show more replies
        </button>
      )}
      {replies.length > MAX_VISIBLE_REPLIES && isExpanded && (
        <button
          className="text-blue-600 text-sm mt-1"
          onClick={() => toggleReplies(parentCommentId)}
        >
          Show less replies
        </button>
      )}
    </div>
  );
}
