import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  const userType = localStorage.getItem('userType');        
  const applicationStatus = localStorage.getItem('applicationStatus'); 

  // 1) Not authenticated => /login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2) If user is a specialist but not "APPROVED", force them to /become-expert
  //    (where your switch statement will handle whether to show pending/rejected form, etc.)
  if (userType === 'SPECIALIST' && applicationStatus !== 'APPROVED') {
    // If they aren't on /become-expert route already, redirect them
    if (location.pathname !== '/become-expert') {
      return <Navigate to="/become-expert" replace />;
    }
  }

  // 3) If user is not specialist but tries to hit /become-expert, redirect to /home
  if (
    ['/become-expert'].includes(location.pathname)
    && userType !== 'SPECIALIST'
  ) {
    return <Navigate to="/home" replace />;
  }

  // 4) Otherwise they can proceed
  return children;
};


export default ProtectedRoute;
