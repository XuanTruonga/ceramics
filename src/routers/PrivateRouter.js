/* eslint-disable jsx-a11y/alt-text */
import { AuthContext } from 'UseContext/AuthContext';
import AdminLayout from 'layouts/AdminLayout/AdminLayout';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const { isAuthenticated,user } = useContext(AuthContext);
  if (user.role !== 'ADMIN' && isAuthenticated) {
    return (
      <div className='p-8'>
        <Link to='/'>
          <img
            width='160px'
            src='//bizweb.dktcdn.net/100/485/241/themes/911577/assets/logo.png?1700209535143'></img>
        </Link>
        <span className='text-red'>Chưa đăng nhập hoặc không phải tài khoản quản trị!</span>
      </div>
    );
  }
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  );
};

export default PrivateRouter;
