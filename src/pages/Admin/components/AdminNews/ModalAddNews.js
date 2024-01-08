/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/Form/InputField/InputField';
import TextareaField from 'components/Form/TextareaField/TextareaField';
import { CloseIcon } from 'components/Icon/Icon';
import InputEditor from 'components/InputEditor/InputEditor';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const ModalAddNewsAdmin = ({ toggleModal, setToggleModal, onSubmitNews }) => {
  const modalInner = useRef();
  const schema = yup.object({
    title: yup.string().min(5, 'tối thiểu 5 ký tự').trim(),
    img: yup.string().required().trim(),
    description: yup.string().required('trường bắt buộc').trim(),
    detail_news: yup.string().required('trường bắt buộc').trim(),
    author: yup.string().required('trường bắt buộc').trim()
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful },
    setFocus
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  useEffect(() => {
    setFocus('title');
  }, [toggleModal]);

  return (
    <div>
      {toggleModal && (
        <div className='overflow'>
          <div
            ref={modalInner}
            className='fixed top-[50%] left-[50%] w-[90vw] h-[90vh] translate-x-[-50%]  translate-y-[-50%] bg-white 
            p-[20px_50px] rounded srcollbar-none'>
            <form onSubmit={handleSubmit(onSubmitNews)}>
              <div className='flex  gap-5'>
                <div className='w-[30%]'>
                  <label className='text-sm font-medium mb-10 block'>
                    Tiêu đề tin tức:
                    <TextareaField
                      className=' border w-full  rounded p-[8px_12px]'
                      name='title'
                      placeholder='Tiêu dề tin tức'
                      control={control}
                    />
                  </label>

                  <label className='text-sm font-medium mb-10 block cursor-pointer'>
                    Sự miêu tả:
                    <TextareaField
                      className=' border w-full  rounded p-[8px_12px]'
                      rows={6}
                      name='description'
                      placeholder='description'
                      control={control}
                    />
                  </label>

                  <label className='text-sm font-medium mb-10 block cursor-pointer'>
                    Nhập link ảnh tin tức:
                    <InputField
                      className=' border w-full  rounded p-[8px_12px]'
                      name='img'
                      placeholder='Nhập link ảnh'
                      control={control}
                    />
                  </label>

                  <label className='text-sm font-medium mb-10 block cursor-pointer'>
                    Tác giả:
                    <InputField
                      className=' border w-full  rounded p-[8px_12px]'
                      name='author'
                      placeholder='Tác giả'
                      control={control}
                    />
                  </label>
                </div>
                <div className='flex-1  '>
                  <span className='text-sm font-medium mb-1 block cursor-pointer'>
                    Chi tiết tin tức (đoạn văn bản):
                  </span>
                  <InputEditor name='detail_news' control={control} />
                </div>
              </div>
              <button className='button-add-product absolute bottom-4 left-[50%] translate-x-[-50%] w-[50%]'>
                Thêm tin tức
              </button>
            </form>
            <div
              className='absolute top-0 right-0 p-3 cursor-pointer hover:opacity-80'
              onClick={() => setToggleModal(false)}>
              <CloseIcon height='24px' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalAddNewsAdmin;
