import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated, setLastVisitedPage } = useAuth();

  if (!isAuthenticated) {
    // Guarda la última página visitada antes de redirigir a /login
    setLastVisitedPage(window.location.pathname);
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
