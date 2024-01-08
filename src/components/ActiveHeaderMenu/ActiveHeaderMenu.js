/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-duplicate-case */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ActiveHeaderMenu = ({ children, setActiveMenu }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    switch (pathname) {
      case '/':
        setActiveMenu('/');
        break;
      case '/gioi-thieu':
        setActiveMenu('GIỚI THIỆU');
        break;
      case '/san-pham':
        setActiveMenu('SẢN PHẨM');
        break;
      case '/tin-tuc':
        setActiveMenu('TIN TỨC');
        break;
      case '/cua-hang':
        setActiveMenu('CỬA HÀNG');
        break;
      case '/lien-he':
        setActiveMenu('LIÊN HỆ');
        break;

      default:
        break;
    }
  }, [pathname]);
  return <>{children}</>;
};

export default ActiveHeaderMenu;
