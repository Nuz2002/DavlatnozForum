// /src/components/Publications/UserProfileButton.js
import React from 'react';
import { getUserProfile } from '../../api-calls/profileApi';
import defaultProfilePic from '../../assets/default-profile.png';

export default function UserProfileButton({ user, onClick }) {
  if (!user) return null;

  // Determine if clickable
  const isPublic = user.accountType === 'public';

  // Cursor/opacity/hover styles
  const baseClasses = 'inline-flex items-center transition-colors rounded-full';
  const clickableClasses = isPublic
    ? 'cursor-pointer hover:bg-blue-100 p-1'
    : 'cursor-default';

  const handleClick = () => {
    if (isPublic && onClick) {
      onClick(user);
    }
  };

  return (
    <button
      className={`${baseClasses} ${clickableClasses}`}
      onClick={handleClick}
      disabled={!isPublic}
      aria-label={isPublic ? `View ${user.name} profile` : undefined}
    >
      {/* Only Avatar with increased size */}
      <img
        src={user.photo || defaultProfilePic}
        alt={user.username}
        className="w-8 h-8 rounded-full border border-blue-200" // Changed from w-6 h-6 to w-8 h-8
      />
    </button>
  );
}
