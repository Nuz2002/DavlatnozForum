import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

// When an expert logs in they shall have a link or something saying "get verified and then they can be prompted to submit the expert verification application"

function AppContent() {
  const location = useLocation();
  const showNavbar = !['/login', '/register'].includes(location.pathname);
  const showFooter = location.pathname === '/home'; // Show footer only on Home page

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminExpertVerificationPanel/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />

        {/* New expert verification route */}
        <Route
          path="/become-expert"
          element={

              <ExpertVerificationForm />
            
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
          path="/"
          element={
            <ProtectedRoute>
              <Navigate to="/home" replace />
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
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
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