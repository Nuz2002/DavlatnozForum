// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  const userType = localStorage.getItem('userType');
  const isVerified = localStorage.getItem('isVerified') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Handle expert verification redirection
  if (location.pathname === '/become-expert') {
    return userType === 'expert' && !isVerified ? children : <Navigate to="/home" replace />;
  }

  if (userType === 'expert' && !isVerified) {
    return <Navigate to="/become-expert" replace />;
  }

  return children;
};

export default ProtectedRoute;