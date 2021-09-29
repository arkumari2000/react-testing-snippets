import React from 'react';
import useAuth from './useHook';

export const CustomHookTesting: React.FC = () => {
  const isLoggedIn = useAuth('');
  const text = isLoggedIn ? 'Welcome' : 'please login';
  return <div data-testid='custom-hook'>{text}</div>;
};
