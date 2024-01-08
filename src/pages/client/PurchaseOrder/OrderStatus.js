/* eslint-disable jsx-a11y/alt-text */
import { apiGetBillDetail } from 'Services/apiBill';
import React, { useState } from 'react';
import { showDate, showHour } from 'ultis/convert';
import ModalViewOder from './ModalViewOrder';

const OrderStatus = ({ data }) => {
  const [toggleViewOder, settoggleViewOder] = useState(false);
  const [itemOder, setItemOder] = useState({});
  const [billDetail, setBillDetail] = useState();

  const handleViewOder = async(data) => {
    try {
      const dataBillDetail = await apiGetBillDetail(data._id);
      setBillDetail(dataBillDetail);
    } catch (error) {}
    settoggleViewOder(true);
    setItemOder(data);
  };
  return (
    <div className='flex mb-5 font-medium '>
      <div className=' ml-4 flex-1 flex gap-12 justify-around'>
        <div className=' font-semibold text-[15px] w-[25%]'>
          <span className='block mb-1'>{data?.fullName}</span>
        </div>
        <span className='font-semibold text-xs flex flex-col items-center'>
          <span>đặt lúc: {showHour(data.createdAt)}</span>
          <span>{showDate(data.createdAt)}</span>
        </span>
        <div className='font-bold text-xs text-red flex flex-col items-center w-[20%]'>
          <span>đang chuẩn bị hàng</span>
          <span className='text-black'>
            {data.payment_id.status === 'UNPAID' ? '(thanh toán khi giao hàng)' : '(Đã thanh toán online)'}
          </span>
        </div>
        <button
          className='p-[2px_12px] rounded border font-semibold text-xs bg-blue text-white hover:bg-blueBold'
          onClick={() => handleViewOder(data)}>
          Xem đơn
        </button>
      </div>
      <ModalViewOder itemOder={itemOder} toggleModal={toggleViewOder} setToggleModal={settoggleViewOder} billDetail={billDetail}/>
    </div>
  );
};

export default OrderStatus;
