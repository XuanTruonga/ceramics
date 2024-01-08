/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React from 'react';

const OrderAll = ({ data }) => {
  return (
    <div className='flex mb-3 font-medium' >
      <div className='relative w-16 h-16'>
        <img
          src={data.image}
          className='border-[1px] border-[#e1e1e1] w-full h-full object-contain absolute top-0 left-0 right-0 bottom-0'></img>
      </div>
      <div className=' ml-4 flex-1 flex'>
        <div className='flex-1'>
          <span className='block mb-1'>{data?.product_name}</span>
          <span className='font-semibold text-xs'>Số lượng: x1</span>
        </div>
        <span className='text-primaryLight font-bold'>{data?.price?.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default OrderAll;
