/* eslint-disable jsx-a11y/alt-text */
import ModalAdminCate from 'components/Mode/ModalAdminCate';
import ModalFixCateAdmin from 'components/Mode/ModalFixCateAdmin';
import { apiDeleteCategorys } from 'Services/apiCategory';
import { useState } from 'react';
import { toast } from 'react-toastify';

const TableAdminNews = ({ apiCates, toggleModal, setToggleModal, onSubmitCate, setValueForm }) => {
  const [toggleFixCate, settoggleFixCate] = useState(false);
  const [itemFixCate, setItemFixCate] = useState({});

  const handleDeleteCate = async (item) => {
    await apiDeleteCategorys(item.id);
    setValueForm(Math.random());
    toast.error('Xóa danh mục thành công!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const handleFixCate = (item) => {
    settoggleFixCate(true);
    setItemFixCate(item);
  };
 
  return (
    <div className='px-7'>
      <table className='text-[15px] w-full'>
        <thead>
          <tr>
            <th className='w-[40%]'>Tên danh mục</th>
            <th>Thương hiệu</th>
            <th>Ngày tạo</th>
            <th>Người tạo</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='font-medium'>
          {apiCates && apiCates.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>
                  <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-[50%] overflow-hidden'>
                      <img src={item.img}></img>
                    </div>
                    <span>{item.name}</span>
                  </div>
                </td>
                <td>Gốm sứ</td>
                <td>Gốm sứ</td>
                <td>Mai Xuân Trường</td>
                <td className='w-[16%]'>
                  <div className='font-bold flex justify-center text-xs'>
                    <button
                      className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                      onClick={() => handleFixCate(item)}>
                      Sửa
                    </button>
                    <span className='inline-block mx-1 font-normal text-[20px]'>/</span>
                    <button
                      className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                      onClick={() => handleDeleteCate(item)}>
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalFixCateAdmin
        itemFixCate = {itemFixCate}
        toggleModal={toggleFixCate}
        setToggleModal={settoggleFixCate}
        setValueForm={setValueForm}
       ></ModalFixCateAdmin>
      <ModalAdminCate toggleModal={toggleModal} setToggleModal={setToggleModal} onSubmitCate={onSubmitCate} />
    </div>
  );
};

export default TableAdminNews;
