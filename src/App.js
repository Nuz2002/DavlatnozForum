import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Components/Home';
import Messages from './Components/Messages';
import Publications from './Components/Publications-Group/Publications';
import Experts from './Components/Experts';
import Footer from './Components/Footer';
import ExpertVerificationForm from './Components/ExpertVerificationForm';
import ProfileSettings from './Components/ProfileSettings';
import AdminExpertVerificationPanel from './Components/AdminExpertVerificationPanel';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import PublicationsDraft from './Components/Publications-Group/PublicationsDraft';

function AppContent() {
  const location = useLocation();

  // For the Navbar: only hide it on login/register
  const showNavbar = !['/login', '/register'].includes(location.pathname);

  // For the Footer: you only want it on /home (example logic)
  const showFooter = location.pathname === '/home';

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        {/* --- Public (unauthenticated) routes --- */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* --- Protected routes --- */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/publications"
          element={
            <ProtectedRoute>
              <Publications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/experts"
          element={
            <ProtectedRoute>
              <Experts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile-settings"
          element={
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/become-expert"
          element={
            <ProtectedRoute>
              <ExpertVerificationForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminExpertVerificationPanel />
            </ProtectedRoute>
          }
        />

        {/* A route for “/” that redirects to “/home” */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navigate to="/home" replace />
            </ProtectedRoute>
          }
        />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
