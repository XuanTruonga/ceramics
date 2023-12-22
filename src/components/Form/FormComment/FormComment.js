/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import InputField from '../InputField/InputField';
import TextareaField from '../TextareaField/TextareaField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';


function FormCommentNews({onSubmit,comments}) {
  const schema = yup.object({
    fullName: yup.string().required('Vui lòng nhập họ và họ và tên.').min(6,'Phải lớn hơn 6 ký tự.').trim(),
    email: yup.string().required('Vui lòng nhập email.').email('email phải kết thúc bằng đuôi "@gmail.com"').trim(),
    content: yup.string().required('Vui lòng nhập nội dung.').trim()
  });

  const form = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(()=>{
    form.reset()
  },[form.formState.isSubmitSuccessful])
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='w-1180 p-3 mt-4'>
      <div className='font-medium text-sm w-full'>
        <div className='grid grid-cols-2 gap-10 '>
          <div className='col-span-1 rounded-md'>
            <InputField
              placeholder='Họ và tên'
              name='fullName'
              control={form.control}
              className='outline-none  rounded-md p-[10px] w-full b-b-primary '
            />
          </div>
          <div className='col-span-1 rounded-md'>
            <InputField
              placeholder='Email'
              name='email'
              control={form.control}
              className='outline-none rounded-md p-[10px] w-full b-b-primary'
            />
          </div>
        </div>
        <div className=' rounded-md mt-4'>
          <TextareaField
            placeholder='Nội dung'
            name='content'
            control={form.control}
            className='outline-none rounded-md p-[8px_16px] mb-[-5px] w-full b-b-primary'
            rows='5'
          />
        </div>
        <div className='mt-6'>
          <button className='min-w-[110px] p-2 rounded-lg h-10 text-white hover:opacity-90 bg-primary -mt-[2px]'>
            Gửi thông tin
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormCommentNews;
