/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/Form/InputField/InputField';
import { apiLockUsers } from 'Services/apiUser';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const ModalFixUser = ({ toggleModal, setToggleModal, itemFixUser, setValueForm }) => {
  const modalInner = useRef();
  const schema = yup.object({
    email: yup.string().required('vui lòng không để trống').email('trường này phải là email').trim(),
    password: yup.string().required('vui lòng không để trống').min(8, 'từ 8 ký tự').trim(),
    // confirmPassword: yup.string().required('vui lòng không để trống').min(6, 'tối thiểu 6 ký tự').trim(),
    username: yup.string().required('vui lòng không để trống').trim(),
    telephone: yup.string().matches(/^\d+$/, 'Trường này phải là số').trim().min(10, 'số điện thoại không hợp lệ'),
    address: yup.string().min(6, 'từ 6 ký tự').trim()
  });

  const {
    handleSubmit,
    control,
    setValue,
    reset,
    setFocus,
    formState: { isSubmitSuccessful }
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setValue('username', itemFixUser.username);
    setValue('telephone', itemFixUser.telephone);
    setValue('password', itemFixUser.password);
    setValue('email', itemFixUser.email);
    setValue('address', itemFixUser.address);
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  useEffect(() => {
    setFocus('firstName');
  }, [toggleModal]);

  const handleToggleModal = (e) => {
    if (e.target === modalInner.current.parentNode) {
      setToggleModal(false);
    }
  };
  const onSubmitUser = (value) => {
    console.log(value);
    if (value) {
      const apiPutUser = async () => {
        const res = await apiLockUsers(itemFixUser._id, value);
        setValueForm(value);
        setToggleModal(false);
        if (res.status === 200) {
          toast.success('Sửa sản phẩm thành công!', { position: toast.POSITION.TOP_RIGHT });
        }
      };
      apiPutUser();
    }
  };
  return (
    <div>
      {toggleModal && (
        <div className='overflow' onClick={handleToggleModal}>
          <div
            ref={modalInner}
            className='fixed top-[50%] left-[50%] w-[450px] min-h-[400px] bg-white transform: translate-x-[-50%]
         transform: translate-y-[-50%] p-[20px_50px] rounded'>
            <form onSubmit={handleSubmit(onSubmitUser)}>
              <label className='text-sm font-medium mb-2 block'>
                Tên tài khoản:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='username'
                  placeholder='Tên tài khoản'
                  control={control}
                />
              </label>
              {/* <label className='text-sm font-medium mb-2 block'>
                Tên:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='lastName'
                  placeholder='Tên'
                  control={control}
                />
              </label> */}
              <label className='text-sm font-medium mb-2 block'>
                email:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='email'
                  placeholder='email'
                  control={control}
                />
              </label>
              <label className='text-sm font-medium mb-2 block'>
                mật khẩu:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='password'
                  placeholder='mật khẩu'
                  control={control}
                />
              </label>
              <label className='text-sm font-medium mb-2 block'>
                số điện thoại:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='telephone'
                  placeholder='số điện thoại'
                  control={control}
                />
              </label>
              <label className='text-sm font-medium mb-2 block'>
                Địa chỉ:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='address'
                  placeholder='Địa chỉ'
                  control={control}
                />
              </label>
              {/* <label className='text-sm font-medium mb-1 block cursor-pointer'>
                Chọn avatar:
                <InputField
                  className='cursor-pointer'
                  name='img'
                  // type='file'
                  control={control}
                />
              </label> */}
              <div className='flex m-auto w-[60%] h-[100px] mb-3 border flex_center rounded overflow-hidden'>
                <img src=''></img>
              </div>
              <button className='button-add-product w-full'>Cập nhập</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFixUser;
