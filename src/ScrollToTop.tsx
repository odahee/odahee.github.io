import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Dependency on location to trigger scroll on route change

  return null; // This component does not render anything
};

export default ScrollToTop;