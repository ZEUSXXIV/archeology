import React from 'react';
import { useNavigate, Route } from 'react-router-dom';

const AuthRoute = ({ path, component: Component, isAuthenticated, ...props }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <Route path={path} element={<Component {...props} />} />;
};

export default AuthRoute;