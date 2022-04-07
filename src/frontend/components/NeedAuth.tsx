import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

/** 内部组件需要登录才能访问 */
const NeedAuth: React.FC<{}> = ({ children }) => {
  const auth = useAppSelector((state) => state.auth.authed);
  const location = useLocation();
  if (!auth) return <Navigate to="/login" state={{ from: location }} replace />;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default NeedAuth;
