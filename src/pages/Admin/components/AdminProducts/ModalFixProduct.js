/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/Form/InputField/InputField';
import { apiUpdateProducts } from 'Services/apiProduct';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import TextareaField from 'components/Form/TextareaField/TextareaField';

const ModalFixProduct = ({ toggleModal, setToggleModal, itemFixProduct, setValueForm }) => {
  const [error, setError] = useState();
  const modalInner = useRef();
  const schema = yup.object({
    name: yup.string().min(5, 'tối thiểu 5 ký tự').trim(),
    priceRoot: yup.string().matches(/^\d+$/, 'trường này phải là số').trim(),
    quantity: yup.string().matches(/^\d+$/, 'trường này phải là số').trim(),
    description: yup.string().required('Vui lòng không để trống'),
    discount: yup
      .string()
      .matches(/\b([0-9]|[1-9][0-9]|100)\b/, 'trường này phải là số lớn hơn 0 và nhỏ hơn 100')
      .trim(),
    img:yup.string().required('vui lòng không để trống')
  });

  const { handleSubmit, control, setValue, reset, setFocus } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setValue('name', itemFixProduct.name);
    setValue('priceRoot', itemFixProduct.priceRoot);
    setValue('quantity', itemFixProduct.quantity);
    setValue('discount', itemFixProduct.discount);
  }, [toggleModal]);

  useEffect(() => {
    setFocus('name');
  }, [toggleModal]);

  const handleToggleModal = (e) => {
    if (e.target === modalInner.current.parentNode) {
      setToggleModal(false);
    }
  };
  const onSubmitProduct = async (value) => {
    try {
      await apiUpdateProducts(itemFixProduct?._id, value);
      reset();
      setError(null);
      setValueForm(value);
      setToggleModal(false);
      toast.success('Cập nhập thành công!', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };
  return (
    <div>
      {toggleModal && (
        <div className='overflow' onClick={handleToggleModal}>
          <div
            ref={modalInner}
            className='fixed top-[50%] left-[50%] w-[800px] min-h-[400px] bg-white transform: translate-x-[-50%]
         transform: translate-y-[-50%] p-[20px_50px] rounded'>
            <form onSubmit={handleSubmit(onSubmitProduct)}>
              <div className='flex gap-5'>
                <div className='w-[40%]'>
                  <label className='text-sm font-medium mb-2 block'>
                    Tên sản phẩm mới:
                    <InputField
                      className=' border w-full rounded p-[8px_12px]'
                      name='name'
                      placeholder='Tên danh mục mới'
                      control={control}
                    />
                  </label>
                  <label className='text-sm font-medium mb-2 block'>
                    Số lượng:
                    <InputField
                      className=' border w-full rounded p-[8px_12px]'
                      name='quantity'
                      placeholder='Số lượng'
                      control={control}
                    />
                  </label>
                  <label className='text-sm font-medium mb-2 block'>
                    Giá(đ):
                    <InputField
                      className=' border w-full rounded p-[8px_12px]'
                      name='priceRoot'
                      placeholder='Giá'
                      control={control}
                    />
                  </label>
                  <label className='text-sm font-medium mb-2 block'>
                    Khuyến mại(%):
                    <InputField
                      className=' border w-full rounded p-[8px_12px]'
                      name='discount'
                      placeholder='Khuyến mại'
                      control={control}
                    />
                  </label>
                  <label className='text-sm font-medium mb-2 block'>
                    Link ảnh danh mục mới:
                    <InputField className='border w-full rounded p-[8px_12px]' name='img' control={control} />
                  </label>
                  {/* <div className='flex_center'>
                    <div className='w-full h-[200px] mb-3 border  rounded overflow-hidden'>
                      <img
                        className='object-contain w-full h-full'
                        src={watch('img') && URL.createObjectURL(watch('img'))}></img>
                    </div>
                  </div> */}
                </div>
                <label className='flex-1'>
                  Sự miêu tả:
                  <TextareaField
                    rows='16'
                    control={control}
                    name='description'
                    className='border w-full rounded p-[8px_12px]'
                  />
                </label>
              </div>
              {error && <span className='text-red text-xs mb-1 inline-block'>{error}</span>}
              <button className='button-add-product w-full'>Cập nhập</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFixProduct;
