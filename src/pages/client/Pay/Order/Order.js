import { PrevIcon, RoteIcon } from 'components/Icon/Icon';
import OrderProductItem from './OrderProductItem';
import { Link } from 'react-router-dom';
import { localStorageCartProducts } from 'components/localStorage/localStorage';
import { totalMoney, totalProductCart } from 'components/ProductItem/HandleCart';
import { useState } from 'react';

function Order() {
  const [toogle, setToogle] = useState(false);
  const dataLocalStorageCart = localStorageCartProducts();
  const toogleMoney = totalMoney(dataLocalStorageCart);
  return (
    <div className='pr-7 shadow'>
      <h3 className='font-18 p-[20px_0_20px_28px] border-b border-slate-300'>
        Đơn hàng ({totalProductCart()} sản phẩm)
      </h3>
      <div className='pl-7'>
        <div className='py-3 h-[480px] max-h-[40vh] overflow-auto border-b-[1px] border-text '>
          <div>
            {dataLocalStorageCart.map((item, index) => {
              return (
                <div key={index}>
                  <OrderProductItem data={item} />
                </div>
              );
            })}
          </div>
        </div>
        {/* ma giam gia */}
        <div className='mt-5 border-b border-b-text pb-4'>
          <div className='flex items-center'>
            <input
              className='rounded p-2 border-[1px] flex-1 border-text focus:border-blue outline-none'
              placeholder='nhập mã giảm giá'></input>
            <span
              onClick={() => setToogle(true)}
              className='whitespace-normal h-11 w-24 bg-blue ml-4 flex_center text-white font-semibold
                 rounded-md cursor-pointer opacity-90 hover:opacity-100'>
              Áp dụng
            </span>
          </div>
          {toogle && <span className='text-sm text-red inline-block'>Mã khuyến mãi không hợp lệ</span>}
        </div>
        {/* tam tinh */}
        <div className='mt-5 text-sm font-medium'>
          <div className=' flex justify-between'>
            <span className=''>Tạm tính:</span>
            <span className='font-semibold'>{toogleMoney.toLocaleString()}₫</span>
          </div>
          <div className='border-b border-b-text flex justify-between mt-2 pb-4'>
            <span className=''>Phí vận chuyển:</span>
            <span className='font-semibold'>40.000₫</span>
          </div>
          <div className='flex justify-between mt-3'>
            <span className=''>Tổng cộng</span>
            <span className='text-blue font-bold'>{(toogleMoney + 40000).toLocaleString()}₫</span>
          </div>
        </div>
        {/*btn dat hang */}
        <div className='mt-6 flex justify-between items-center font-bold text-sm'>
          <Link to='/gio-hang' className='flex items-center text-blue'>
            <PrevIcon />
            <span className='ml-1 '>Quay về giỏ hàng</span>
          </Link>

          <button className='h-12 bg-blue w-28 rounded-xl flex_center opacity-90 hover:opacity-100 cursor-pointer'>
            {/* <span className='inline-block animate-[rote_1s_linear_infinite] text-white'>
                <RoteIcon height='30px'/>
              </span> */}
            <span className='text-white font-bold'>ĐẶT HÀNG</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Order;
