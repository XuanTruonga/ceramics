/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoSrcollToTop = ({ children }) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scroll({
      behavior: 'smooth',
      top: 0
    });
  },[pathname]);
  return children;
};

export default AutoSrcollToTop;
