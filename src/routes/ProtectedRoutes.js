import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const ADMIN_ROLE = localStorage.getItem('role') || null;
  const TOKEN = localStorage.getItem('access-token') || null;

  const denyAccess = () => {
    alert('No tenés autorización para ingresar a esta página');
    return (<Navigate to='/' replace />);
  };

  return ((!ADMIN_ROLE || !TOKEN) ? denyAccess() : <Outlet />);
};

export default ProtectedRoutes;
