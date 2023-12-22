import { useForm } from 'react-hook-form';
import InputField from '../InputField/InputField';
import TextareaField from '../TextareaField/TextareaField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
function FormContact() {
  const schema = yup.object({
   name: yup.string().required('Vui lòng không để trống').trim(),
   email: yup.string().email('Email không hợp lệ').required('Vui lòng không để trống').trim(),
   telephone: yup.string().matches(/^\d+$/,'Trường này phải là số').trim().min(10,'số điện thoại không hợp lệ'),
   content: yup.string().required('Vui lòng không để trống').trim()
  })
   const { handleSubmit, control } = useForm({
      resolver: yupResolver(schema)
   });
  
  const onSubmit = (value) => {
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-2  w-[70%] font-medium'>
        <InputField
          placeholder='Họ và tên'
          className='w-full p-[4px_12px] outline-none rounded-lg overflow-hidden border-[1px] border-slate-300'
          name='name'
          control={control}
        />
      </div>
      <div className='mb-2  w-[70%] font-medium'>
        <InputField
          placeholder='Email'
          className='w-full p-[4px_12px] outline-none rounded-lg overflow-hidden border-[1px] border-slate-300'
          name='email'
          control={control}
        />
      </div>
      <div className='mb-2  w-[70%] font-medium'>
        <InputField
          placeholder='Điện thoại'
          className='w-full p-[4px_12px] outline-none rounded-lg overflow-hidden border-[1px] border-slate-300'
          name='telephone'
          control={control}
        />
      </div>
      <div className='mb-2  w-[70%] font-medium'>
        <TextareaField
          rows='3'
          placeholder='content'
          className='w-full p-[4px_12px] outline-none rounded-lg overflow-hidden border-[1px] border-slate-300'
          name='content'
          control={control}
        />
      </div>
      <button className='min-w-[110px] bg-primary p-2 rounded-lg h-9 text-white hover:opacity-90 text-sm mt-2 transition'>
        Gửi Thông Tin
      </button>
    </form>
  );
}

export default FormContact;
