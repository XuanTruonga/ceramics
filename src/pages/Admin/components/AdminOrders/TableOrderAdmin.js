/* eslint-disable jsx-a11y/alt-text */

import { useState } from 'react';
// import { toast } from 'react-toastify';
import ModalInOder from './ModalInOder';
// import { apiDeleteBill } from 'Services/apiOrder';
import { showDate, showHour } from 'ultis/convert';
import { apiGetBillDetail } from 'Services/apiBill';

const TableOrderAdmin = ({ apiOder, setValueForm }) => {
  const [toggleInOder, settoggleInOder] = useState(false);
  const [itemOder, setItemOder] = useState({});
  const [billDetail, setBillDetail] = useState();
  // const handleDeleteOder = async (item) => {
  //   await apiDeleteBill(item.id);
  //   setValueForm(Math.random());
  //   toast.error('Xóa danh mục thành công!', {
  //     position: toast.POSITION.TOP_RIGHT
  //   });
  // };
  const handleInOder = async (item) => {
    try {
      const dataBillDetail = await apiGetBillDetail(item._id);
      setBillDetail(dataBillDetail);
    } catch (error) {}
    settoggleInOder(true);
    setItemOder(item);
  };

  return (
    <div className='px-7'>
      <table className='text-[15px] w-full'>
        <thead>
          <tr>
            <th className='w-[18%]'>Tên người nhận</th>
            <th className='w-[30%]'>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Ngày tạo</th>
            <th>Thanh toán</th>
            <th className='w-[14%]'></th>
          </tr>
        </thead>
        <tbody className='font-medium'>
          {apiOder &&
            apiOder?.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.fullName}</td>
                  <td>{item.address}</td>
                  <td>{item.telephone}</td>
                  <td>{`${showHour(item.createdAt)} ${showDate(item.createdAt)}`}</td>
                  <td>
                    {item.payment_id.status === 'UNPAID' ? 'Thanh toán khi nhận hàng' : 'Đã thanh toán online'}
                  </td>
                  <td>
                    <div className='font-bold flex justify-center text-xs'>
                      <button
                        className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                        onClick={() => handleInOder(item)}>
                        In đơn
                      </button>
                      <span className='inline-block mx-1 font-normal text-[20px]'></span>
                      {/* <button
                        className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                        onClick={() => handleDeleteOder(item)}>
                        Xóa
                      </button> */}
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalInOder itemOder={itemOder} toggleModal={toggleInOder} setToggleModal={settoggleInOder} billDetail={billDetail}/>
    </div>
  );
};

export default TableOrderAdmin;
