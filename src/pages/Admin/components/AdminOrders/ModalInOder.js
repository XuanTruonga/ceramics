/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from 'react';
import { totalMoneyOrder } from 'ultis/totalMoneyOrder';

const ModalInOder = ({ toggleModal, setToggleModal, itemOder, billDetail }) => {
  const modalInner = useRef();
  const productsBill = billDetail?.data?.data;
  const handleToggleModal = (e) => {
    if (e.target === modalInner.current.parentNode) {
      setToggleModal(false);
    }
  };
  return (
    <div>
      {toggleModal && (
        <div className='overflow' onMouseDown={handleToggleModal}>
          <div
            ref={modalInner}
            className='fixed top-[50%] left-[50%] w-[300px]  bg-white transform: translate-x-[-50%]
         transform: translate-y-[-50%] p-[10px_20px] rounded border-[2px] border-black'>
            <ul className='text-sm font-medium'>
              <li className='text-center text-xl font-bold p-[8px_16px]'>Chi tiết đơn hàng</li>
              <li>
                <span className='font-bold mr-2'>Người nhận:</span>
                <span>{itemOder.fullName}</span>
              </li>
              <li>
                <span className='font-bold mr-2'>Điện thoại:</span>
                <span>{itemOder.telephone}</span>
              </li>
              <li className='border-b border-text pb-1'>
                <span className='font-bold mr-2'>Địa chỉ:</span>
                <span>{itemOder.address}</span>
              </li>
              <li className='border-b border-text py-4 min-h-[100px]'>
                <h5 className='mb-2'>Danh sách sản phẩm:</h5>
                {productsBill.map((item) => {
                  return (
                    <div className='flex justify-between gap-4 font-bold text-xs mb-1' key={item._id}>
                      <span className='w-[60%] flex-shrink-0'>{item.product_name}.</span>
                      <span className='w-[10%] text-center'>x1</span>
                      <span className='w-[30%] text-right'>{item.price.toLocaleString()}</span>
                    </div>
                  );
                })}
              </li>
              <li className='mt-2'>
                <span className='font-bold mr-2'>
                  {`Tổng SL: ${productsBill.length}  -  Tổng tiền: ${totalMoneyOrder(
                    productsBill
                  ).toLocaleString()}đ`}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalInOder;
