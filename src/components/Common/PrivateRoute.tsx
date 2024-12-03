import * as React from 'react';
import { Navigate } from 'react-router-dom';

export interface PrivateRouteProps {
  children: React.ReactNode; // Component con
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  // check user is login
  const isLoggerIn = Boolean(localStorage.getItem('access_token'));
  return isLoggerIn ? <>{children}</> : <Navigate to="/login" />;
}
