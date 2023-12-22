import { yupResolver } from '@hookform/resolvers/yup';
import { EyesOffIcon, EyesOnIcon, FaceBookIcon, GoogleIcon } from 'components/Icon/Icon';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../InputField/InputField';
import {  useState } from 'react';
import { apiLoginUsers } from 'Services/apiUser';

function FormLogin() {
  const [viewPassword, setViewPassword] = useState(true);
  const [account, setAccount] = useState(false);
  const [user, setUser] = useState(false);

  const schema = yup.object({
    username: yup.string().required('tk ko hợp lệ'),
    password: yup.string().required('vui lòng không để trống').trim()
  });
  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (value) => {
    const post = {
      username: value.username,
      password: value.password
    };
    if (value) {
      const getApiAdmin = async () => {
        const res = await apiLoginUsers(post);
        console.log(res.data)
        if (res) {
          setUser(true);
          localStorage.setItem(
            'user',
            JSON.stringify({ token: res.data.token, isAuthenticated: true })
          );
        } else {
          setAccount(true);
          setValue('username', '');
          setValue('password', '');
        }
      };
      getApiAdmin();
    }
  };
  return (
    <div className='flex justify-center text-center'>
      <div className='bg-white p-6 w-[400px] shadow-md border-[1px] border-text rounded-lg overflow-hidden mb-7'>
        <ul className='flex items-center justify-center border-b-[1px] border-slate-200 font-medium text-[16px] '>
          <li className='flex-1 border-b-[1px] border-primary text-primary'>
            <Link to='/dang-nhap' className='leading-[42px] block'>
              ĐĂNG NHẬP
            </Link>
          </li>
          <li className='flex-1'>
            <Link to='/dang-ky' className='leading-[42px] block hover:text-primary transition'>
              ĐĂNG KÝ
            </Link>
          </li>
        </ul>
        <h1 className='text-2xl py-4'>ĐĂNG NHẬP</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='rounded-md'>
            <InputField
              className='outline-none  rounded-md b-b-primary p-[8px_10px] w-full'
              placeholder='username'
              name='username'
              control={control}
            />
          </div>
          <div className='rounded-md mt-3 relative'>
            <InputField
              type={viewPassword ? 'password' : null}
              className='outline-none rounded-md b-b-primary p-[8px_10px] w-full'
              placeholder='password'
              name='password'
              control={control}
            />
            <div
              className='absolute right-[8px] top-[12px] cursor-pointer'
              onClick={() => setViewPassword(!viewPassword)}>
              {viewPassword ? <EyesOffIcon /> : <EyesOnIcon />}
            </div>
          </div>
          {account && (
            <span className='mt-1 inline-block text-sm text-red'>Tài khoản hoặc mật khẩu không chính xác</span>
          )}
          <button
            className='p-[8px_32px] text-base text-white rounded-lg font-medium bg-primary hover:opacity-90 
                  transition text-center cursor-pointer mt-3 w-full'>
            Đăng Nhập
          </button>
          <Link to='dang-nhap' className='my-4 block font-medium hover:text-primary transition'>
            Quên mật khẩu
          </Link>
        </form>
        <div>
          <h4 className='mb-4 text-sm font-medium'>Hoặc đăng nhập bằng</h4>
          <div className='flex justify-center gap-5 text-xs'>
            <Link
              className='flex bg-blueDark text-white rounded flex_center gap-1 min-w-[120px] h-9 
                  transition hover:opacity-90'>
              <FaceBookIcon />
              <span>Facebook</span>
            </Link>
            <Link
              className='flex bg-red rounded flex_center gap-1 min-w-[120px] text-white h-9 
                  transition hover:opacity-90'>
              <GoogleIcon />
              <span>Google</span>
            </Link>
          </div>
        </div>
      </div>
      {user && <Navigate to='/' replace={true} />}
    </div>
  );
}

export default FormLogin;
