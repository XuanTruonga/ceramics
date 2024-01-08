/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { apiGetBillUserId } from 'Services/apiBill';
import { AuthContext } from 'UseContext/AuthContext';
import CategorySlide from 'components/Category/CategorySlide';
import React, { useContext, useEffect, useState } from 'react';
import OrderStatus from './OrderStatus';

const listStatusOder = ['Tình trạng đơn hàng', 'Hoàn thành', 'Đã hủy'];
const PurchaseOrder = () => {
  const { user } = useContext(AuthContext);
  const [statusOrder, setStatusOrder] = useState('Tình trạng đơn hàng');
  const [bills, setBills] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const dataBillUser = async () => {
      try {
        const listBill = await apiGetBillUserId(user?._id);
        setBills(listBill.data.data);
      } catch (error) {}
    };
    dataBillUser();
  }, [user._id]);

  useEffect(() => {
    if(!bills?.length>0){
      setToggle(false)
    }else{
      setToggle(true)
    }
  },[bills]);

  return (
    <div className='bg-[#f5f5f5]'>
      <CategorySlide title='Tình trạng đơn hàng' />
      <div className='w-1180'>
        <div className='grid grid-cols-8 flex-1 py-5 mb-8 '>
          <ul className='col-span-2 font-semibold'>
            <li className='flex gap-3 p-5 items-center text-primaryLight border-b border-primary mb-4'>
              <div className='h-12 w-12 border-[1px] border-slate-300 rounded-[50%] flex_center'>
                <img src={user.img} alt=' '></img>
              </div>
              <div>
                <span>{user.username}</span>
              </div>
            </li>
            {listStatusOder.map((item) => {
              return (
                <li
                  key={item}
                  onClick={(e) => {
                    item === 'Hoàn thành' || item === 'Đã hủy' ? setToggle(false) : setToggle(true);
                    setStatusOrder(item);
                  }}
                  style={statusOrder === item ? { color: 'red' } : {}}
                  className='p-3 hover:text-red hover:cursor-pointer flex gap-2 items-center'>
                  <div className='h-2 w-2 rounded-[50%] bg-red relative '>
                    <span className='w-full h-full bg-primary rounded-[50%] absolute animate-ping'></span>
                  </div>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
          <div className='col-span-6 bg-white rounded py-5'>
            <div className='flex gap-2 items-center bg-[#f5f5f5] p-4'>
              <div className='h-4 w-4 rounded-[50%] bg-red relative '>
                <span className='w-full h-full bg-primary rounded-[50%] absolute animate-ping'></span>
              </div>
              <div className='flex justify-between flex-1 font-18'>
                <h3 className=' '>Gốm sứ chu đậu uy tín đẳng cấp 2024.</h3>
                <span className='flex-1 block text-right'>Đơn hàng</span>
              </div>
            </div>

            <div className='p-4'>
              {toggle ? (
                <div>
                  {bills?.map((bill) => {
                    return (
                      <div key={bill._id}>
                        {statusOrder === 'Tình trạng đơn hàng' ? <OrderStatus data={bill} /> : null}
                      </div>
                    );
                  })}
                  {/* <div className='text-right'>
                    <span className='text-[15px] font-medium mr-1'>Tổng tiền:</span>
                    <span className='text-red font-bold'>{totalMoneyOrder(bills).toLocaleString()}đ</span>
                  </div> */}
                </div>
              ) : (
                <div className='flex_center flex-col gap-5 w-full h-[60vh]'>
                  <div
                    className='w-[100px] h-[100px]'
                    style={{
                      backgroundImage:
                        'url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/orderlist/5fafbb923393b712b96488590b8f781f.png)',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100px'
                    }}></div>
                  <span className='block font-18'>Chưa có sản phẩm nào</span>
                </div>
              )}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
