/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { AdminIcon, CategoryIcon } from 'components/Icon/Icon';
import { Link } from 'react-router-dom';
import {  useEffect, useState } from 'react';

import NavCart from './components/NavCart/NavCart';
import NavHeart from './components/NavHeart/NavHeart';
import PopperCategory from './components/PopperProduct';
import NavSearch from './components/NavSearch/NavSearch';
import SearchMode from './components/SearchMode/SearchMode';
import { apiGetUsersCurrent } from 'Services/apiUser';

function Header() {
  const [modeSearch, setModeSearch] = useState(false);
  const [user, setUser] = useState({});
  const dataUser = JSON.parse(localStorage.getItem('user')) || {};

  useEffect(() => {
    const userLogged = async () => {
      const res = await apiGetUsersCurrent();
      setUser(res.data);
    };
    userLogged();
  }, []);

  const handleoutAccount = ()=>{
    localStorage.setItem(
      'user',
      JSON.stringify({ token: '', isAuthenticated: false })
    );
  }
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
          <div className='col-span-8 rounded-[10px] hidden lg:flex_center'>
            <div className='flex_center'>
              <Link className='nav_text' to='/'>
                TRANG CHỦ
              </Link>
              <Link className='nav_text' to='/gioi-thieu'>
                GIỚI THIỆU
              </Link>
              <div className='hover-input'>
                <Link className='nav_text' to='/san-pham'>
                  <span className='caret-down cursor-pointer hover:after:animate-180'>SẢN PHẨM</span>
                </Link>
                <PopperCategory />
              </div>

              <Link className='nav_text' to='/tin-tuc'>
                TIN TỨC
              </Link>
              <Link className='nav_text' to='/cua-hang'>
                CỬA HÀNG
              </Link>
              <Link className='nav_text' to='/lien-he'>
                LIÊN HỆ
              </Link>
            </div>
          </div>
          {/* nav icon */}
          <div className='col-span-2 flex justify-between items-center lg:justify-center height-search'>
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
                  className='nav_Admin-before hover-output p-2 text-[0.9rem] min-w-[130px] rounded text-black
                  top-[113%] right-[2px] shadow-md bg-white font-semibold smooth'>
                    {console.log(dataUser)}
                  {dataUser.isAuthenticated ? (
                    <div className='w-full p-[5px_8px] block hover:text-primary text-base transition whitespace-nowrap'>
                      <div className='flex items-center gap-2'>
                        <img src={user.img}></img>
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
                  <Link
                    to='/login-admin'
                    className='hover:text-primary w-full block text-base p-[5px_8px] transition'>
                    Quản trị
                  </Link>
                  {dataUser.isAuthenticated ? (
                    <a href='/' onClick={handleoutAccount} className='hover:text-primary w-full block text-base p-[5px_8px] transition'>
                      Đăng xuất
                    </a>
                  ):null}
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
