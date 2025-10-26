import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface TProtectedRoutes{
    children: ReactNode
}

const ProtectedRoutes = ({ children }: TProtectedRoutes) => {
  // Check if a session exists 
  const sessionData = localStorage.getItem('session');
  
  if (!sessionData) {
    // Redirect to the login page if no session 
    return <Navigate to="/login" replace />;
  }

  // If a session exists, render the protected content
  return children;
};

export default ProtectedRoutes;
