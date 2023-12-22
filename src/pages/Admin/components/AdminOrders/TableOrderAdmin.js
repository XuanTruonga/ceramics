/* eslint-disable jsx-a11y/alt-text */

import { useState } from 'react';
import { toast } from 'react-toastify';
import ModalInOder from './ModalInOder';
import { apiDeleteOrders } from 'Services/apiOrder';

const TableOrderAdmin = ({ apiOder, setValueForm }) => {
  const [toggleInOder, settoggleInOder] = useState(false);
  const [itemOder, setItemOder] = useState({});

  const handleDeleteOder = async (item) => {
    await apiDeleteOrders(item.id);
    setValueForm(Math.random());
    toast.error('Xóa danh mục thành công!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const handleInOder = (item) => {
    settoggleInOder(true);
    setItemOder(item);
  };
 
  return (
    <div className='px-7'>
      <table className='text-[15px] w-full'>
        <thead>
          <tr>
            <th className='w-[40%]'>Tên người nhận</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Ngày tạo</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='font-medium'>
          {apiOder && apiOder.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.fullName}</td>
                <td>{`${item.address}-${item.ward}-${item.district}-${item.provices}`}</td>
                <td>{item.telephone}</td>
                <td>Ngày Tạo</td>
                <td className='w-[16%]'>
                  <div className='font-bold flex justify-center text-xs'>
                    <button
                      className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                      onClick={() => handleInOder(item)}>
                      In đơn
                    </button>
                    <span className='inline-block mx-1 font-normal text-[20px]'>/</span>
                    <button
                      className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                      onClick={() => handleDeleteOder(item)}>
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalInOder
        itemOder = {itemOder}
        toggleModal={toggleInOder}
        setToggleModal={settoggleInOder}
       />
    </div>
  );
};

export default TableOrderAdmin;