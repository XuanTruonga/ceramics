/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from 'react';

const ModalInOder = ({ toggleModal, setToggleModal, itemOder }) => {
  const modalInner = useRef();

  const handleToggleModal = (e) => {
    if (e.target === modalInner.current.parentNode) {
      setToggleModal(false);
    }
  };

  return (
    <div>
      {toggleModal && (
        <div className='overflow' onClick={handleToggleModal}>
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
                <span>{`${itemOder.address}-${itemOder.ward}-${itemOder.district}-${itemOder.provices}`}</span>
              </li>
              <li className='border-b border-text py-4 min-h-[100px]'>
                <h5 className=''>Danh sách sản phẩm:</h5>
                <div></div>
              </li>
              <li className='mt-2'>
                <span className='font-bold mr-2'>{`Tổng SL:${''} - Tổng tiền:${''}đ`}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalInOder;
