import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  const userType = localStorage.getItem('userType');      // e.g., "expert", "admin", "user"
  const isVerified = localStorage.getItem('isVerified') === 'true';

  // 1) If not authenticated, go to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2) If user is an unverified expert
  //    - If they’re going to /become-expert, allow them in
  if (userType === 'expert' && !isVerified) {
    if (location.pathname === '/become-expert') {
      return children; // Let them fill out the form
    }
    // Otherwise, force them to /become-expert
    return <Navigate to="/become-expert" replace />;
  }

  // 3) If none of the above conditions apply, user is allowed
  return children;
};

export default ProtectedRoute;
