import { useState, useEffect } from 'react';

function useAuth(user: string | undefined) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user !== undefined) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return {
    isLoggedIn,
  };
}

export default useAuth;
