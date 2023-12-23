/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/Form/InputField/InputField';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const ModalAddUser = ({ toggleModal, setToggleModal,errorMessage, onSubmitUser, btn = 'Thêm danh mục' }) => {
  const modalInner = useRef();

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

  const {
    handleSubmit,
    control,
    reset,
    setFocus
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setFocus('username');
    reset()
  }, [toggleModal]);

  const handleToggleModal = (e) => {
    if (e.target === modalInner.current.parentNode) {
      setToggleModal(false);
    }
  };

  return (
    <div>
      {toggleModal && (
        <div className='overflow' onClick={handleToggleModal}>
          <div
            ref={modalInner}
            className='fixed top-[50%] left-[50%] w-[400px] min-h-[450px] bg-white transform: translate-x-[-50%]
         transform: translate-y-[-50%] p-[20px_50px] rounded'>
            <form onSubmit={handleSubmit(onSubmitUser)}>
              <label className='text-sm font-medium mb-2 block'>
                Tên tài khoản:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='username'
                  placeholder='userName'
                  control={control}
                />
              </label>

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
                số điện thoại:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='address'
                  placeholder='địa chỉ'
                  control={control}
                />
              </label>

              {errorMessage && (
                <span className='mt-1 inline-block text-sm text-red'>{errorMessage}</span>
              )}
              <button className='button-add-product w-full mt-7'>Thêm người dùng</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalAddUser;
