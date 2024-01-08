/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/Form/InputField/InputField';
import { apiUpdateCategorys } from 'Services/apiCategory';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const ModalFixCateAdmin = ({ toggleModal, setToggleModal, itemFixCate, setCallApiCate }) => {
  const [error, setError] = useState();
  const modalInner = useRef();
  const schema = yup.object({
    category_name: yup.string().required('vui lòng không để trống'),
    group: yup.string().required('vui lòng không để trống'),
    img: yup.string().required('vui lòng không để trống')
  });

  const { handleSubmit, control, reset, setFocus, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setValue('category_name', itemFixCate.category_name);
    setValue('group', itemFixCate.category_name);
    setValue('img', itemFixCate.img);
  });

  useEffect(() => {
    setFocus('category_name');
  }, [toggleModal]);

  const handleToggleModal = (e) => {
    if (e.target === modalInner.current.parentNode) {
      setToggleModal(false);
    }
  };
  const onSubmitCate = async (value) => {
    try {
      await apiUpdateCategorys(itemFixCate._id, value);
      setCallApiCate(value);
      setToggleModal(false);
      toast.success('Sửa sản phẩm thành công!', { position: toast.POSITION.TOP_RIGHT });
      reset()
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
            className='fixed top-[50%] left-[50%] w-[450px] min-h-[400px] h-[400px] bg-white transform: translate-x-[-50%]
         transform: translate-y-[-50%] p-[20px_50px] rounded '>
            <div className='relative h-full' >
              <form onSubmit={handleSubmit(onSubmitCate)}>
                <label className='text-sm font-medium mb-2 block'>
                  Tên danh mục mới:
                  <InputField
                    className=' border w-full rounded p-[8px_12px]'
                    name='category_name'
                    placeholder='Tên danh mục mới'
                    control={control}
                  />
                </label>
                <label className='text-sm font-medium mb-2 block'>
                  Loại danh mục mới:
                  <InputField
                    className='border w-full rounded p-[8px_12px]'
                    name='group'
                    control={control}
                    placeholder='Loại danh mục mới:'
                  />
                </label>
                <label className='text-sm font-medium mb-2 block'>
                  Link img danh mục mới:
                  <InputField
                    className='border w-full rounded p-[8px_12px]'
                    name='img'
                    control={control}
                    placeholder='Link img danh mục mới:'
                  />
                </label>
                {error && <span className='text-red text-xs mb-1 inline-block'>{error}</span>}
                <button className='button-add-product w-full absolute bottom-0 left-0'>Sửa danh mục</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFixCateAdmin;
