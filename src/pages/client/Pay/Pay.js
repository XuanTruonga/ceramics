import FormInfoReceive from 'components/Form/FormInfoReceive/FormInfoReceive';
import { DolaIcon } from 'components/Icon/Icon';
import Order from './Order/Order';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ContextFormPay } from 'UseContext/UseContext';
import { Link, useNavigate } from 'react-router-dom';
import { totalMoney } from 'components/ProductItem/HandleCart';
import { apiAddBill } from 'Services/apiOrder';
import { toast } from 'react-toastify';
import { useContext, useRef } from 'react';
import { localStorageCartProducts } from 'components/localStorage/localStorage';
import { AuthContext } from 'UseContext/AuthContext';

/* eslint-disable jsx-a11y/alt-text */
function Pay() {
  const { user } = useContext(AuthContext);
  const refButton = useRef();
  const refPayment = useRef();
  const navigate = useNavigate();
  const dataLocalStorageCart = localStorageCartProducts();
  const amount = totalMoney(dataLocalStorageCart);
  const schema = yup.object({
    email: yup.string().required('vui lòng không để trống').email('trường này phải là email').trim(),
    telephone: yup.string().matches(/^\d+$/, 'Trường này phải là số').min(10, 'số điện thoại không hợp lệ').trim(),
    name: yup.string().required('vui lòng không để trống').min(6, 'tối thiểu 6 ký tự').trim(),
    address: yup.string().required('vui lòng không để trống').trim(),
    provices: yup.string().required('vui lòng không để trống').trim(),
    district: yup.string().required('vui lòng không để trống').trim(),
    ward: yup.string().required('vui lòng không để trống').trim(),
    payMethod: yup.string().required('vui lòng không để trống').trim(),
    note: yup.mixed()
  });
  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all'
  });
  const onSubmitOrder = async (value) => {
    const { address, district, email, name, payMethod, provices, telephone, ward, note } = value;
    const data = {
      payment_method: payMethod === 'Thanh toán online' ? 'PAYMENT_IN_ADVANCE' : 'PAYMENT_ON_DELIVEY',
      address: `${address}-${ward}-${district}-${provices}`,
      fullName: name,
      telephone: telephone,
      email: email,
      note: note,
      user_id: user._id,
      total_money: amount,
      products: dataLocalStorageCart.map((item) => ({
        product_id: item._id,
        quantity: item.quantity
      }))
    };
    try {
      const bill = await apiAddBill(data);
      if (bill?.data?.data?.payment_id?.payment_method === 'PAYMENT_IN_ADVANCE') {
        refPayment.current.value = bill.data.data.payment_id._id;
        refButton.current.click();
        navigate('/tinh-trang-don-hang');
      }
      reset();
      navigate('/tinh-trang-don-hang');
      localStorage.removeItem('Cart');
      toast.success('Tạo hóa đơn thành công!', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error('Tạo hóa đơn thất bại!', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <ContextFormPay value={{ register: register, errors: errors }}>
      <form action='http://localhost:5001/api/payment' method='POST' className='opacity-0 pointer-events-none'>
        <input ref={refPayment} name='paymentId' />
        <input name='amount' value={amount} />
        <button ref={refButton}>Submit</button>
      </form>

      <form className='w-1180' onSubmit={handleSubmit(onSubmitOrder)}>
        <div className='grid grid-cols-3  gap-7 h-[100vh]'>
          <div className='grid col-span-2 p-4'>
            <Link to={'/'} className='flex justify-center h-20'>
              <img src='//bizweb.dktcdn.net/100/485/241/themes/911577/assets/logo.png?1700209535143'></img>
            </Link>
            <div className='grid grid-cols-2 gap-7 '>
              {/* thong tin nhan hang */}
              <div className='col-span-1'>
                <FormInfoReceive control={control} />
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
                <h3 className='font-18 mt-8 mb-2'>Thanh toán</h3>

                <div className='w-full rounded-md  border-[1px] border-[#ccc] h-[80px]'>
                  <div className='flex justify-between items-center h-[40%] p-[8px_12px]'>
                    <div className='flex items-center'>
                      <span className='h-4 w-4 rounded-[50%] bg-blue'></span>
                      <span className='ml-1'>Thanh toán khi giao hàng (COD)</span>
                    </div>
                    <span className='text-blueBold'>
                      <DolaIcon />
                    </span>
                  </div>

                  <select className='bg-slate-100 h-[60%] w-full flex items-center' {...register('payMethod')}>
                    <option value=''>Chọn phương tức thanh toán?</option>
                    <option>Thanh toán online</option>
                    <option>Thanh toán khi nhận được hàng</option>
                  </select>
                  <p className='text-red text-[13px]'>{errors.payMethod?.message}</p>
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
