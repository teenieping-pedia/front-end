import { useLayoutEffect, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = (isLoading) => {
  const { pathname } = useLocation();
  const [isRestored, setIsRestored] = useState(false);

  const saveScrollPosition = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
  };

  const restoreScrollPosition = () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      setIsRestored(true);
    }
  };

  useEffect(() => {
    if (!isLoading && !isRestored) {
      restoreScrollPosition();
    }
  }, [isLoading, isRestored]);

  useLayoutEffect(() => {
    return () => {
      saveScrollPosition();
    };
  }, [pathname]);
};

export default useScrollRestoration;
