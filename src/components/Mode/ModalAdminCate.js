/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import { apiAddCategorys } from 'Services/apiCategory';
import InputField from 'components/Form/InputField/InputField';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const ModalAdminCate = ({ toggleModal, setToggleModal, setCallApiCate }) => {
  const [error, setError] = useState();
  const modalInner = useRef();
  const schema = yup.object({
    category_name: yup.string().required('vui lòng không để trống'),
    group: yup.string().required('vui lòng không để trống'),
    img: yup.string().required('vui lòng không để trống')
  });

  const { handleSubmit, control, reset, setFocus } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setFocus('name');
  }, [toggleModal]);

  const handleToggleModal = (e) => {
    if (e.target === modalInner.current.parentNode) {
      setToggleModal(false);
    }
  };

  const onSubmitCate = async (value) => {
    try {
      await apiAddCategorys(value);
      reset();
      setCallApiCate(value);
      setToggleModal(false);
      toast.success('Thêm danh mục thành công!', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return (
    <div>
      {toggleModal && (
        <div className='overflow' onMouseDown={handleToggleModal}>
          <div
            ref={modalInner}
            className='fixed top-[50%] left-[50%] w-[400px] min-h-[450px] h-[400px] bg-white transform: translate-x-[-50%]
         transform: translate-y-[-50%] p-[20px_50px] rounded '>
            <div className='relative h-full'>
              <form onSubmit={handleSubmit(onSubmitCate)}>
                <label className='text-sm font-medium mb-2 block'>
                  Tên danh mục:
                  <InputField
                    className=' border w-full rounded p-[8px_12px]'
                    name='category_name'
                    placeholder='Tên danh mục'
                    control={control}
                  />
                </label>
                <label className='text-sm font-medium mb-2 block'>
                  Loại danh mục:
                  <InputField
                    className='border w-full rounded p-[8px_12px]'
                    name='group'
                    placeholder='Loại danh mục'
                    control={control}
                  />
                </label>
                <label className='text-sm font-medium mb-2 block'>
                  Img danh mục:
                  <InputField
                    className='border w-full rounded p-[8px_12px]'
                    name='img'
                    placeholder='Img danh mục'
                    control={control}
                  />
                </label>
                {error && <span className='text-red text-xs mb-1 inline-block'>{error}</span>}
                <button className='button-add-product w-full absolute bottom-0'>Thêm danh mục</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalAdminCate;
