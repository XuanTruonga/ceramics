import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../InputField/InputField';
import { useState } from 'react';
import { EyesOffIcon, EyesOnIcon } from 'components/Icon/Icon';
import { apiGetAccountAdmin } from 'Services/address';
import { Navigate } from 'react-router-dom';

function FormLoginAdmin() {
  const [viewPassword, setViewPassword] = useState(true);
  const [account, setAccount] = useState(false);
  const [user, setUser] = useState(null);

  const schema = yup.object({
    email: yup.string().required('email ko hợp lệ').email('email ko hợp lệ'),
    password: yup.string().required('mật khẩu từ 6 ký tự').min(6, 'mật khẩu từ 6 ký tự').trim()
  });
  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (value) => {
    if (value) {
      const getApiAdmin = async () => {
        const res = await apiGetAccountAdmin();
        if (res.email === value.email && value.password === res.password) {
          setUser(res);
        } else {
          setAccount(true);
          setValue('email', '');
          setValue('password', '');
        }
      };
      getApiAdmin();
    }
  };
  return (
    <div className='flex justify-center text-center'>
      <div className='bg-white p-6 w-[400px] shadow-md border-[1px] border-text rounded-lg overflow-hidden mb-7'>
        <h1 className='text-2xl py-4'>ĐĂNG NHẬP ADMIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='rounded-md'>
            <InputField
              className='outline-none  rounded-md b-b-primary p-[8px_10px] w-full'
              placeholder='Email'
              name='email'
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
      </div>
      {user && <Navigate to='/admin/nguoi-dung' state={user} replace={true} />}
    </div>
  );
}

export default FormLoginAdmin;
