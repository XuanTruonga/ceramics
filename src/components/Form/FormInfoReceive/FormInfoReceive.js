import { AdminIcon } from 'components/Icon/Icon';
import SelectAddressPay from 'components/SelectAddressPay/SelectAddressPay';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';

function FormInfoReceive(props) {
  const { control } = props;
  return (
    // title
    <div className='text-sm font-medium'>
      <div className='flex justify-between mb-3'>
        <h3 className=' font-18'>Thông tin nhận hàng</h3>
        <Link to='dang-nhap' className='text-blue flex_center gap-1 hover:text-blueBold'>
          <AdminIcon />
          <span>Đăng nhập</span>
        </Link>
      </div>
      {/* form */}
      <div>
        <div className='mb-3'>
          <InputField
            className='w-full p-[8px_12px] outline-none focus:border-blue focus:border-[1px] rounded-md overflow-hidden
                  font-medium  border-[1px] border-[#ccc]'
            placeholder='Email'
            name='email'
            control={control}
          />
        </div>

        <div className='mb-3'>
          <InputField
            className='w-full p-[8px_12px] outline-none focus:border-blue focus:border-[1px] rounded-md overflow-hidden
                  font-medium  border-[1px] border-[#ccc]'
            placeholder='Họ và tên'
            name='name'
            control={control}
          />
        </div>

        <div className='mb-3'>
          <InputField
            className='w-full p-[8px_12px] outline-none focus:border-blue focus:border-[1px] rounded-md overflow-hidden
                  font-medium  border-[1px] border-[#ccc]'
            placeholder='Số điện thoại'
            name='telephone'
            control={control}
          />
        </div>

        <div className='mb-3'>
          <InputField
            className='w-full p-[8px_12px] outline-none focus:border-blue focus:border-[1px] rounded-md overflow-hidden
                  font-medium  border-[1px] border-[#ccc]'
            placeholder='Địa chỉ (Số nhà/xóm)'
            name='address'
            control={control}
          />
        </div>

        <SelectAddressPay control={control}/>

        <textarea
          className='w-full p-[8px_12px] outline-none focus:border-blue focus:border-[2px]1rounded-md overflow-hidden
                    font-medium  h-full border-[1px] border-[#ccc]'
          placeholder='Nội dung (Tùy chọn)'></textarea>
      </div>
    </div>
  );
}
export default FormInfoReceive;
