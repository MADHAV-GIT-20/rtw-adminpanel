import { Navigate, Outlet } from 'react-router-dom';

interface Authentication {
  token?: string;
}
export const PrivateRoute = ({ token }:Authentication) => (
    token ? <Outlet /> : <Navigate to="/login" />
  );
