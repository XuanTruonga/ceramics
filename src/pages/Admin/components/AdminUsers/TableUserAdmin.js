/* eslint-disable jsx-a11y/alt-text */

import { useState } from 'react';
// import { toast } from 'react-toastify';
import ModalFixUser from './ModalFixUser';
import ModalAddUser from './ModalAddUser';
import { apiLockUsers } from 'Services/apiUser';
import { toast } from 'react-toastify';

const TableCateAdmin = ({ apiUser, toggleModal, setToggleModal, onSubmitUser, setCallApiUser,errorMessage }) => {
  const [toggleFixUser, settoggleFixUser] = useState(false);
  const [itemFixUser, setItemFixUser] = useState({});

  const handleLockUser = async (item) => {
    try {
    await apiLockUsers(item._id,{ is_locked: true});
      toast.success('Khóa tài khoản thành công!',{
        position:toast.POSITION.TOP_RIGHT
      })
      setCallApiUser(item)
    } catch (error) {
      toast.error('Khóa không thành công!',{
        position:toast.POSITION.TOP_RIGHT
      })
    }
  };
  const handleFixUser = (item) => {
    settoggleFixUser(true);
    setItemFixUser(item);
  };

  return (
    
    <div className='px-7'>
      <table className='text-[15px] w-full'>
        <thead>
          <tr>
            <th className='w-[40%]'>Tên người dùng</th>
            <th>Email</th>
            <th>Ngày tạo</th>
            <th>Số điện thoại</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='font-medium'>
          {apiUser.data &&
            apiUser.data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <div className='flex items-center gap-2'>
                      <div className='w-10 h-10 rounded-[50%] overflow-hidden'>
                        <img src={item.img || ''}></img>
                      </div>
                      <span>{item.username}</span>
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.telephone}</td>
                  <td className='w-[16%]'>
                    <div className='font-bold flex justify-center text-xs'>
                      <button
                        className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                        onClick={() => handleFixUser(item)}>
                        Sửa
                      </button>
                      <span className='inline-block mx-1 font-normal text-[20px]'>/</span>
                      <button
                        className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                        onClick={() => handleLockUser(item)}>
                        Khóa
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalFixUser
        itemFixUser={itemFixUser}
        toggleModal={toggleFixUser}
        setToggleModal={settoggleFixUser}
        setCallApiUser={setCallApiUser}
      />
      <ModalAddUser toggleModal={toggleModal} setToggleModal={setToggleModal} onSubmitUser={onSubmitUser} errorMessage={errorMessage}/>
    </div>
  );
};

export default TableCateAdmin;
