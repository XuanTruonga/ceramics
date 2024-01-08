/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { AdminIcon, CategoryIcon } from 'components/Icon/Icon';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import NavCart from './components/NavCart/NavCart';
import NavHeart from './components/NavHeart/NavHeart';
import PopperCategory from './components/PopperProduct';
import NavSearch from './components/NavSearch/NavSearch';
import SearchMode from './components/SearchMode/SearchMode';
import { AuthContext } from 'UseContext/AuthContext';
import ActiveHeaderMenu from 'components/ActiveHeaderMenu/ActiveHeaderMenu';
import { cn } from 'ultis/cn';

function Header() {
  const [modeSearch, setModeSearch] = useState(false);
  const authContext = useContext(AuthContext);
  const [activeMenu, setActiveMenu] = useState();

  const { user, isAuthenticated } = authContext;

  const handleoutAccount = () => {
    localStorage.setItem('token', JSON.stringify({ token: '', isAuthenticated: false }));
  };

  return (
    <div className='header z-10 left-0 top-0 right-0  flex_center height-search text-base lg:absolute'>
      <div className='container '>
        <nav className='grid lg:grid-cols-12 grid-cols-2'>
          {/* nav logo */}
          <a href='/' className='col-span-2 flex_center px-[15px]'>
            <img
              src='//bizweb.dktcdn.net/100/485/241/themes/911577/assets/logo.png?1700209535143'
              className='max-h-14'></img>
          </a>
          {/* nav text */}
          <div className='col-span-8 rounded-[10px] flex_center'>
            <div className='flex_center'>
              <ActiveHeaderMenu setActiveMenu={setActiveMenu} />
              <Link
                to='/'
                className={cn('nav_text', {
                  'text-primaryLight': activeMenu === '/'
                })}>
                TRANG CHỦ
              </Link>
              <Link
                to='/gioi-thieu'
                className={cn('nav_text', {
                  'text-primaryLight': activeMenu === 'GIỚI THIỆU'
                })}>
                GIỚI THIỆU
              </Link>
              <div className='hover-input'>
                <Link
                  to='/san-pham'
                  className={cn('nav_text', {
                    'text-primaryLight': activeMenu === 'SẢN PHẨM'
                  })}>
                  <span className='caret-down cursor-pointer hover:after:animate-180'>SẢN PHẨM</span>
                </Link>
                <PopperCategory />
              </div>

              <Link
                to='/tin-tuc'
                className={cn('nav_text', {
                  'text-primaryLight': activeMenu === 'TIN TỨC'
                })}>
                TIN TỨC
              </Link>
              <Link
                to='/cua-hang'
                className={cn('nav_text', {
                  'text-primaryLight': activeMenu === 'CỬA HÀNG'
                })}>
                CỬA HÀNG
              </Link>
              <Link
                to='/lien-he'
                className={cn('nav_text', {
                  'text-primaryLight': activeMenu === 'LIÊN HỆ'
                })}>
                LIÊN HỆ
              </Link>
            </div>
          </div>
          {/* nav icon */}
          <div className='col-span-2 flex  items-center justify-center height-search'>
            <span className='lg:hidden'>
              <CategoryIcon />
            </span>
            <div className='flex_center'>
              <div>
                <NavSearch onClick={() => setModeSearch(true)} />
              </div>
              {modeSearch && <SearchMode setModeSearch={setModeSearch} />}
              <div className='nav_icon hover-input'>
                <div className='hover:text-primary transition'>
                  <AdminIcon />
                </div>
                <div
                  className='nav_Admin-before hover-output p-2 text-[0.9rem] min-w-[180px] rounded text-black
                  top-[113%] right-[2px] shadow-md bg-white font-semibold smooth '>
                  <span className='absolute top-[-10px] left-0 right-0 bg-black h-4 bg-transparent'></span>
                  {isAuthenticated ? (
                    <div className='w-full p-[5px_8px] block hover:text-primary text-base transition whitespace-nowrap'>
                      <div className='flex items-center gap-2'>
                        <img className='h-6 w-6 rounded-[50%]' src={user.img} alt=' '></img>
                        <span>{user.username}</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Link
                        to='/dang-nhap'
                        className='w-full p-[5px_8px] block hover:text-primary text-base transition whitespace-nowrap'>
                        Đăng nhập
                      </Link>
                      <Link
                        to='/dang-ky'
                        className='hover:text-primary w-full block text-base p-[5px_8px] transition'>
                        Đăng ký
                      </Link>
                    </div>
                  )}
                  {isAuthenticated ? (
                    <>
                      <Link
                        to='/tinh-trang-don-hang'
                        className='hover:text-primary w-full block text-base p-[5px_8px] transition'>
                        Tình trạng đơn hàng
                      </Link>
                      <Link
                        to='/admin/nguoi-dung'
                        className='hover:text-primary w-full block text-base p-[5px_8px] transition'>
                        Quản trị
                      </Link>
                      <a
                        href='/'
                        onClick={handleoutAccount}
                        className='hover:text-primary w-full block text-base p-[5px_8px] transition'>
                        Đăng xuất
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
              <NavHeart />
              <NavCart />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
