/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { toast } from 'react-toastify';
import ModalFixNewsAdmin from './ModalFixNews';
import ModalAddNewsAdmin from './ModalAddNews';
import { apiRemoveNews } from 'Services/apiNews';

const TableAdminNews = ({ apiNews, toggleModal, setToggleModal, onSubmitNews, setCallApi }) => {
  const [toggleFixNews, settoggleFixNews] = useState(false);
  const [itemFixNews, setItemFixNews] = useState({});

  const handleDeleteCate = async (item) => {
    try {
      await apiRemoveNews(item._id);
      setCallApi(Math.random());
      toast.success('Xóa danh mục thành công!', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error('Xóa danh mục thành công!', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  const handleFixCate = (item) => {
    settoggleFixNews(true);
    setItemFixNews(item);
  };

  return (
    <div className='px-7'>
      <table className='text-[15px] w-full'>
        <thead>
          <tr>
            <th className='w-[40%]'>Tiêu đề tin tức</th>
            <th>Ngày tạo</th>
            <th>Tác giả</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='font-medium'>
          {apiNews.length > 0 &&
            apiNews.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>
                    <div className='flex items-center gap-2'>
                      <div className='w-10 h-10 rounded-[50%] overflow-hidden flex-shrink-0 border-primaryLight border-[1px] flex_center'>
                        <img src={item.img}></img>
                      </div>
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td>{item.createdAt}</td>
                  <td>{item.author}</td>
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
      <ModalFixNewsAdmin
        itemFixNews={itemFixNews}
        toggleModal={toggleFixNews}
        setToggleModal={settoggleFixNews}
        setCallApi={setCallApi}></ModalFixNewsAdmin>
      <ModalAddNewsAdmin toggleModal={toggleModal} setToggleModal={setToggleModal} onSubmitNews={onSubmitNews} />
    </div>
  );
};

export default TableAdminNews;
