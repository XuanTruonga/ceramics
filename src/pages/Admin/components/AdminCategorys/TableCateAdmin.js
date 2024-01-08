/* eslint-disable jsx-a11y/alt-text */
import ModalAdminCate from 'components/Mode/ModalAdminCate';
import ModalFixCateAdmin from 'components/Mode/ModalFixCateAdmin';
import { apiDeleteCategorys } from 'Services/apiCategory';
import { useState } from 'react';
import { toast } from 'react-toastify';

const TableCateAdmin = ({ apiCates, toggleModal, setToggleModal, setCallApiCate }) => {
  const [toggleFixCate, settoggleFixCate] = useState(false);
  const [itemFixCate, setItemFixCate] = useState({});

  const handleDeleteCate = async (item) => {
    try {
      await apiDeleteCategorys(item._id);
      setCallApiCate(item);
      toast.error('Xóa danh mục thành công!', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {}
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
            <th>Group</th>
            <th>Ngày tạo</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='font-medium'>
          {apiCates &&
            apiCates.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <div className='flex items-center gap-2'>
                      <div className='w-10 h-10 rounded-[50%] overflow-hidden'>
                        <img src={item.img}></img>
                      </div>
                      <span>{item.category_name}</span>
                    </div>
                  </td>
                  <td>{item.group}</td>
                  <td>{item.createdAt}</td>
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
        itemFixCate={itemFixCate}
        toggleModal={toggleFixCate}
        setToggleModal={settoggleFixCate}
        setCallApiCate={setCallApiCate}></ModalFixCateAdmin>
      <ModalAdminCate toggleModal={toggleModal} setToggleModal={setToggleModal} setCallApiCate={setCallApiCate} />
    </div>
  );
};

export default TableCateAdmin;
