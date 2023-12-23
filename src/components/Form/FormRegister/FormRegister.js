import { EyesOffIcon, EyesOnIcon, FaceBookIcon, GoogleIcon } from 'components/Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import InputField from '../InputField/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { apiRegisterUser } from 'Services/apiUser';
import { toast } from 'react-toastify';

function FormRegister() {
  const [viewPassword, setViewPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // const [viewConfirmPassword, setViewConfirmPassword] = useState(true);
  const schema = yup.object({
    email: yup.string().required('vui lòng không để trống').email('trường này phải là email').trim(),
    password: yup
      .string()
      .required('vui lòng không để trống')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Từ 8 ký tự và cả số')
      .trim(),
    // confirmPassword: yup.string().required('vui lòng không để trống').min(6, 'tối thiểu 6 ký tự').trim(),
    username: yup.string().required('vui lòng không để trống').trim(),
    telephone: yup.string().matches(/^\d+$/, 'Trường này phải là số').trim().min(10, 'số điện thoại không hợp lệ'),
    address: yup.string().min(6, 'từ 6 ký tự').trim()
  });
  const { handleSubmit, control, setFocus } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setFocus('username');
  }, [setFocus]);

  // submit form
  const onSubmit = async (data) => {
    try {
      await apiRegisterUser(data);
      navigate('/dang-nhap');
          toast.success('Đăng ký thành công !', {
          position: toast.POSITION.TOP_RIGHT
        });
    } catch (error) {
      setErrorMessage(error.response.data?.message?.email || error.response.data?.message?.username ||'');
    }
  };
  return (
    <div className='flex justify-center text-center '>
      <div className='bg-white p-6 w-[400px] shadow-md border-[1px] border-text rounded-lg overflow-hidden mb-7'>
        <ul className='flex items-center justify-center border-b-[1px] border-slate-200 font-medium text-[16px] '>
          <li className='flex-1 '>
            <Link to='/dang-nhap' className='leading-[42px] block hover:text-primary transition'>
              ĐĂNG NHẬP
            </Link>
          </li>
          <li className='flex-1'>
            <Link to='/dang-ky' className='leading-[42px] block text-primary border-b-[1px] border-primary'>
              ĐĂNG KÝ
            </Link>
          </li>
        </ul>
        <h1 className='text-2xl py-4'>ĐĂNG KÝ</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='rounded-md'>
            <InputField
              control={control}
              className='outline-none b-b-primary rounded p-[8px_10px] w-full'
              placeholder='Tên tài khoản'
              name='username'
            />
          </div>
          <div className='rounded-md mt-3'>
            <InputField
              control={control}
              placeholder='Email'
              className='outline-none b-b-primary rounded p-[8px_10px] w-full'
              name='email'
            />
          </div>
          <div className='rounded-md mt-3'>
            <InputField
              control={control}
              placeholder='địa chỉ'
              className='outline-none b-b-primary rounded p-[8px_10px] w-full'
              name='address'
            />
          </div>
          <div className='rounded-md mt-3'>
            <InputField
              control={control}
              placeholder='Số điện thoại'
              className='outline-none b-b-primary rounded p-[8px_10px] w-full'
              name='telephone'
            />
          </div>
          <div className='rounded-md mt-3 relative'>
            <InputField
              type={viewPassword ? 'password' : null}
              control={control}
              placeholder='Mật khẩu'
              className='outline-none b-b-primary rounded p-[8px_10px] w-full'
              name='password'
            />
            <div
              type={viewPassword ? 'password' : null}
              className='absolute right-[8px] top-[12px] cursor-pointer'
              onClick={() => setViewPassword(!viewPassword)}>
              {viewPassword ? <EyesOffIcon /> : <EyesOnIcon />}
            </div>
          </div>
          {<span className='text-sm text-red'>{errorMessage}</span>}
          {/* <div className='rounded-md mt-3 relative'>
            <InputField
              type={viewConfirmPassword ? 'password' : null}
              control={control}
              placeholder='Xác nhận mật khẩu'
              className='outline-none b-b-primary rounded p-[8px_10px] w-full'
              name='confirmPassword'
            />
            <div
              className='absolute right-[8px] top-[12px] cursor-pointer'
              onClick={() => setViewConfirmPassword(!viewConfirmPassword)}>
              {viewConfirmPassword ? <EyesOffIcon /> : <EyesOnIcon />}
            </div>
          </div> */}
          <button
            className='p-[8px_32px] text-base text-white rounded-lg font-medium bg-primary hover:opacity-90 
                  transition text-center cursor-pointer mt-3 w-full'>
            ĐĂNG KÝ
          </button>
        </form>
        <div>
          <h4 className='my-4 text-sm font-medium'>Hoặc đăng nhập bằng</h4>
          <div className='flex justify-center gap-5 text-xs'>
            <Link
              className='flex bg-blueDark text-white rounded flex_center gap-1 min-w-[120px] h-9 
                  hover:opacity-90 transition'>
              <FaceBookIcon />
              <span>Facebook</span>
            </Link>
            <Link
              className='flex bg-red rounded flex_center gap-1 min-w-[120px] text-white h-9 
                  hover:opacity-90 transition'>
              <GoogleIcon />
              <span>Google</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
