import React, { useState, useRef, useEffect } from "react";
import { FaRegComment, FaChevronDown, FaChevronUp } from "react-icons/fa";

const defaultProfilePic = "https://i.pravatar.cc/40";
const MAX_VISIBLE_COMMENTS = 3;
const MAX_VISIBLE_REPLIES = 2;

// ==================== ReplyInput Component ====================
const ReplyInput = ({ placeholder, onSubmit, inputKey }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      key={inputKey}
      ref={inputRef}
      type="text"
      className="w-full p-2 bg-blue-50 rounded-lg border border-blue-100 outline-none"
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && text.trim()) {
          onSubmit(text);
          setText("");
        }
      }}
    />
  );
};

// ==================== CommentInput Component ====================
const CommentInput = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <input
      type="text"
      className="w-full p-2 mt-4 bg-blue-50 rounded-lg border border-blue-100 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
      placeholder="Add a comment..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && text.trim()) {
          addComment(postId, text);
          setText("");
        }
      }}
    />
  );
};

// ==================== Reply Component ====================
const Reply = ({ reply, postId, parentCommentId, setReplyingTo, addReply, currentUser }) => {
  return (
    <div className="mb-2">
      <div className="flex items-start">
        <img
          src={reply.user.photo || defaultProfilePic}
          alt={reply.user.name}
          className="w-6 h-6 rounded-full mr-2"
        />
        <div className="flex-1">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-sm font-medium text-blue-900">{reply.user.name}</p>
            {reply.replyTo && (
              <p className="text-xs text-gray-500">
                Replying to @{reply.replyTo.username}
              </p>
            )}
            <p className="text-blue-800">{reply.text}</p>
          </div>
          <button
            className="text-blue-600 text-sm mt-1"
            onClick={() =>
              setReplyingTo({
                postId,
                commentId: parentCommentId,
                replyId: reply.id
              })
            }
          >
            Reply
          </button>
          {currentUser.replyingTo?.replyId === reply.id && (
            <div className="mt-2">
              <ReplyInput
                inputKey={`reply-input-${postId}-${parentCommentId}-${reply.id}`}
                placeholder="Write a reply..."
                onSubmit={(text) =>
                  addReply(postId, parentCommentId, reply.user, text)
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== RepliesList Component ====================
const RepliesList = ({ replies, postId, parentCommentId, expanded, toggleReplies, ...props }) => {
  const visibleReplies = expanded ? replies : replies.slice(0, MAX_VISIBLE_REPLIES);

  return (
    <div className="ml-4 mt-2">
      {visibleReplies.map((reply) => (
        <Reply
          key={reply.id}
          reply={reply}
          postId={postId}
          parentCommentId={parentCommentId}
          {...props}
        />
      ))}
      {replies.length > MAX_VISIBLE_REPLIES && (
        <button
          className="text-blue-600 text-sm mt-1"
          onClick={() => toggleReplies(parentCommentId)}
        >
          {expanded ? "Show less replies" : "Show more replies"}
        </button>
      )}
    </div>
  );
};

// ==================== Comment Component ====================
const Comment = ({ comment, postId, expandedReplies, toggleReplies, ...props }) => {
  const isReplying = props.replyingTo?.commentId === comment.id && !props.replyingTo?.replyId;

  return (
    <div className="mb-4">
      <div className="flex items-start">
        <img
          src={comment.user.photo || defaultProfilePic}
          alt={comment.user.name}
          className="w-6 h-6 rounded-full mr-2"
        />
        <div className="flex-1">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-sm font-medium text-blue-900">{comment.user.name}</p>
            <p className="text-blue-800">{comment.text}</p>
          </div>
          <button
            className="text-blue-600 text-sm mt-1"
            onClick={() => props.setReplyingTo({ postId, commentId: comment.id })}
          >
            Reply
          </button>
          {isReplying && (
            <div className="mt-2">
              <ReplyInput
                inputKey={`reply-input-${postId}-${comment.id}`}
                placeholder="Write a reply..."
                onSubmit={(text) =>
                  props.addReply(postId, comment.id, comment.user, text)
                }
              />
            </div>
          )}
          {comment.replies?.length > 0 && (
            <RepliesList
              replies={comment.replies}
              postId={postId}
              parentCommentId={comment.id}
              expanded={expandedReplies[comment.id]}
              toggleReplies={toggleReplies}
              {...props}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== CommentsList Component ====================
const CommentsList = ({ comments, postId, ...props }) => {
  return comments.map((comment) => (
    <Comment
      key={comment.id}
      comment={comment}
      postId={postId}
      {...props}
    />
  ));
};

// ==================== Post Component ====================
const Post = ({ 
  post, 
  currentUser,
  expandedPostComments,
  togglePostComments,
  addComment,
  ...props 
}) => {
  const visibleComments = expandedPostComments[post.id]
    ? post.comments
    : post.comments.slice(0, MAX_VISIBLE_COMMENTS);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-blue-100">
      <div className="flex items-center mb-4">
        <img
          src={post.user.photo || defaultProfilePic}
          alt={post.user.name}
          className="w-10 h-10 rounded-full border-2 border-blue-100"
        />
        <div className="ml-3">
          <p className="font-bold text-blue-900">{post.user.name}</p>
          <p className="text-sm text-blue-600">@{post.user.username}</p>
        </div>
      </div>
      <p className="text-blue-900 mb-4">{post.text}</p>

      <div className="border-t border-blue-100 pt-4">
        <div className="flex items-center text-blue-600 mb-4">
          <FaRegComment className="mr-2" />
          <span className="font-medium">{post.comments.length} comments</span>
        </div>

        <CommentsList
          comments={visibleComments}
          postId={post.id}
          currentUser={currentUser}
          {...props}
        />

        {post.comments.length > MAX_VISIBLE_COMMENTS && (
          <button
            className="text-blue-600 text-sm mt-2"
            onClick={() => togglePostComments(post.id)}
          >
            {expandedPostComments[post.id] ? "Show less comments" : "Show more comments"}
          </button>
        )}

        <CommentInput postId={post.id} addComment={addComment} />
      </div>
    </div>
  );
};

// ==================== NewPost Component ====================
const NewPost = ({ user, newPost, setNewPost, handlePostSubmit }) => (
  <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-blue-100">
    <div className="flex items-center mb-4">
      <img
        src={user.photo || defaultProfilePic}
        alt={user.name}
        className="w-10 h-10 rounded-full border-2 border-blue-100"
      />
      <div className="ml-3">
        <p className="font-bold text-blue-900">{user.name}</p>
        <p className="text-sm text-blue-600">@{user.username}</p>
      </div>
    </div>
    <textarea
      className="w-full p-3 bg-blue-50 rounded-lg border border-blue-100 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
      rows="3"
      placeholder="Share your thoughts..."
      value={newPost}
      onChange={(e) => setNewPost(e.target.value)}
    />
    <button
      className="mt-3 w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-lg transition-colors shadow-md"
      onClick={handlePostSubmit}
    >
      Post
    </button>
  </div>
);

// ==================== Main Component ====================
const Publications = () => {
  const [expandedPostComments, setExpandedPostComments] = useState({});
  const [expandedReplies, setExpandedReplies] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);
  const [posts, setPosts] = useState([...]); // Initial posts data same as before
  const [newPost, setNewPost] = useState("");
  const [user] = useState({...}); // User data same as before

  // Handler functions remain the same as original
  const handlePostSubmit = () => {...};
  const addComment = (postId, text) => {...};
  const addReply = (postId, commentId, replyTargetUser, text) => {...};
  const togglePostComments = (postId) => {...};
  const toggleReplies = (commentId) => {...};

  return (
    <div className="min-h-screen bg-blue-50 p-4 pt-12">
      <div className="max-w-2xl mx-auto">
        <NewPost
          user={user}
          newPost={newPost}
          setNewPost={setNewPost}
          handlePostSubmit={handlePostSubmit}
        />

        <div className="space-y-6">
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              currentUser={user}
              expandedPostComments={expandedPostComments}
              togglePostComments={togglePostComments}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
              expandedReplies={expandedReplies}
              toggleReplies={toggleReplies}
              addComment={addComment}
              addReply={addReply}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;