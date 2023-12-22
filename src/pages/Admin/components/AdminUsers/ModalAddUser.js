/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/Form/InputField/InputField';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const ModalAddUser = ({ toggleModal, setToggleModal,onSubmitUser,btn='Thêm danh mục' }) => {
  const modalInner = useRef();
  const schema = yup.object({
    firstName: yup.string().min(2, 'tối thiểu 2 ký tự').trim(),
    lastName:yup.string().min(2, 'tối thiểu 2 ký tự').trim(),
    email:yup.string().required('không để trống').email('trường này phải là email').trim(),
    telephone: yup.string().matches(/^\d+$/,'trường này phải là số').min(10,'tối thiểu 10 số').trim(),
    password:yup.string().matches(/(?=.*?[0-9])(?=.*?[az])/,'phải có chữ cái và số',).min(6,'tối thiểu 6 ký tự').trim(),
    img: yup.string().trim()
  });

  const { handleSubmit, control,reset,formState:{isSubmitSuccessful},setFocus } = useForm({
    resolver: yupResolver(schema)
  });
  
  useEffect(()=>{
    reset()
  },[isSubmitSuccessful])

  useEffect(() => {
    setFocus("name")
  }, [toggleModal])

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
                Họ:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='firstName'
                  placeholder='Họ'
                  control={control}
                />
              </label>
              <label className='text-sm font-medium mb-2 block'>
                Tên:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='lastName'
                  placeholder='Tên'
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
              <label className='text-sm font-medium mb-1 block cursor-pointer'>
                Chọn avatar:
                <InputField
                  className='cursor-pointer'
                  name='img'
                  // type='file'
                  control={control}
                />
              </label>
              <div className='flex m-auto w-[60%] h-[100px] mb-3 border flex_center rounded overflow-hidden'>
                <img src=''></img>
              </div>
              <button className='button-add-product w-full'>Thêm người dùng</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalAddUser;
