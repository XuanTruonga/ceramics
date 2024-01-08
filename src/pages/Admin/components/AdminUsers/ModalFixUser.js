/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/Form/InputField/InputField';
import { apiUpdateUsers } from 'Services/apiUser';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const ModalFixUser = ({ toggleModal, setToggleModal, itemFixUser, setCallApiUser }) => {
  const modalInner = useRef();
  const [error, setError] = useState(null);

  const schema = yup.object({
    email: yup.string().required('vui lòng không để trống').email('trường này phải là email').trim(),
    // confirmPassword: yup.string().required('vui lòng không để trống').min(6, 'tối thiểu 6 ký tự').trim(),
    telephone: yup.string().matches(/^\d+$/, 'Trường này phải là số').trim().min(10, 'số điện thoại không hợp lệ'),
    address: yup.string().min(6, 'từ 6 ký tự').trim()
  });

  const { handleSubmit, control, setValue, setFocus } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setValue('telephone', itemFixUser.telephone);
    setValue('email', itemFixUser.email);
    setValue('address', itemFixUser.address);
  });

  useEffect(() => {
    setFocus('firstName');
  }, [toggleModal]);

  const handleToggleModal = (e) => {
    if (e.target === modalInner.current.parentNode) {
      setToggleModal(false);
    }
  };
  const onSubmitUser = async (value) => {
    try {
      await apiUpdateUsers(itemFixUser._id, value);
      setCallApiUser(value);
      setToggleModal(false);
      toast.success('Cập nhập thành công', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div>
      {toggleModal && (
        <div className='overflow' onMouseDown={handleToggleModal}>
          <div
            ref={modalInner}
            className='fixed top-[50%] left-[50%] w-[450px] min-h-[300px] bg-white transform: translate-x-[-50%]
         transform: translate-y-[-50%] p-[20px_50px] rounded'>
            <form onSubmit={handleSubmit(onSubmitUser)} className=''>
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
              {error && <span className='font-semibold text-sm text-red block text-center'>email đã tồn tại</span>}
              <button className='button-add-product w-full mt-6'>Cập nhập</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFixUser;
