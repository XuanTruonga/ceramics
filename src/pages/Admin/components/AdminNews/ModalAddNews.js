/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/Form/InputField/InputField';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const ModalAdminCate = ({ toggleModal, setToggleModal,onSubmitCate,btn='Thêm danh mục' }) => {
  // const [img, setImg] = useState(null);
  const modalInner = useRef();
  const schema = yup.object({
    name: yup.string().min(5, 'tối thiểu 5 ký tự'),
    img: yup.string()
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
            <form onSubmit={handleSubmit(onSubmitCate)}>
              <label className='text-sm font-medium mb-2 block'>
                Tên danh mục:
                <InputField
                  className=' border w-full rounded p-[8px_12px]'
                  name='name'
                  placeholder='Tên danh mục'
                  control={control}
                />
              </label>
              <label className='text-sm font-medium mb-1 block cursor-pointer'>
                Chọn ảnh danh mục:
                <InputField
                  className='cursor-pointer'
                  name='img'
                  placeholder='Tải ảnh lên'
                  // type='file'
                  control={control}
                />
              </label>
              <div className='w-full h-[200px] mb-3 border flex_center rounded overflow-hidden'>
                <img src=''></img>
              </div>
              <button className='button-add-product w-full'>{btn}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalAdminCate;
