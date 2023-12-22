import FormInfoReceive from 'components/Form/FormInfoReceive/FormInfoReceive';
import { DolaIcon, RoteIcon } from 'components/Icon/Icon';
import Order from './Order/Order';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ContextFormPay } from 'UseContext/UseContext';

/* eslint-disable jsx-a11y/alt-text */
function Pay() {
  const schema = yup.object({
    email: yup.string().required('vui lòng không để trống').email('trường này phải là email').trim(),
    telephone: yup.string().matches(/^\d+$/,'Trường này phải là số').trim().min(10,'số điện thoại không hợp lệ'),
    name: yup.string().required('vui lòng không để trống').min(6,'tối thiểu 6 ký tự'),
    address: yup.string().required('vui lòng không để trống').min(6,'tối thiểu 6 ký tự'),
    provices: yup.string().required('vui lòng không để trống'),
    district: yup.string().required('vui lòng không để trống'),
    ward: yup.string().required('vui lòng không để trống'),
  });
  const { handleSubmit, control ,register,formState: { errors },} = useForm({
    resolver: yupResolver(schema),
    mode: 'all'
  });
  const onSubmit = (value) => {
    // console.log(value);
  };

  return (
    <ContextFormPay value={{register:register,errors:errors}}>
      <form className='w-1180' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-3  gap-7 h-[100vh]'>
          <div className='grid col-span-2 p-7'>
            <div className='flex justify-center h-20'>
              <img src='//bizweb.dktcdn.net/100/485/241/themes/911577/assets/logo.png?1700209535143'></img>
            </div>
            <div className='grid grid-cols-2 gap-7 -mt-20'>
              {/* thong tin nhan hang */}
              <div className='col-span-1'>
                <FormInfoReceive control={control}/>
              </div>
              {/* van chuyen thanh toan */}
              <div className='col-span-1 text-[15px] font-medium'>
                <h3 className='font-18 mb-2 -mt-[2px]'>Vận chuyển</h3>
                <div
                  className='w-full p-[8px_12px] rounded-md overflow-hidden font-medium h-12 border-[1px] border-[#ccc]
      								flex justify-between items-center '>
                  <div className='flex items-center'>
                    <span className='h-4 w-4 rounded-[50%] bg-blue'></span>
                    <span className='ml-1'>Giao hàng tận nơi</span>
                  </div>
                  <span>40.000₫</span>
                </div>
                {/* quay */}
                {/* <span className='opacity-50 inline-block animate-[rote_1s_linear_infinite]'><RoteIcon/></span> */}
                <h3 className='font-18 mt-8 mb-2'>Thanh toán</h3>
  
                <div className='w-full rounded-md overflow-hidden border-[1px] border-[#ccc] h-[150px]'>
                  <div className='flex justify-between items-center h-[40%] p-[8px_12px]'>
                    <div className='flex items-center'>
                      <span className='h-4 w-4 rounded-[50%] bg-blue'></span>
                      <span className='ml-1'>Thanh toán khi giao hàng (COD)</span>
                    </div>
                    <span className='text-blueBold'>
                      <DolaIcon />
                    </span>
                  </div>
  
                  <div className='bg-slate-100 h-[60%]  flex items-center'>
                    <span className='p-[8px_12px]'>Bạn chỉ phải thanh toán khi nhận được hàng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* dat hang */}
          <div className='grid grid-cols-1 bg-slate-50 '>
            <Order />
          </div>
        </div>
      </form>
    </ContextFormPay>
  );
}

export default Pay;
