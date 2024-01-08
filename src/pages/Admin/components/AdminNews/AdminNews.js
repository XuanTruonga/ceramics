import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../HeaderAdmin';
import { toast } from 'react-toastify';
import PaginationAdmin from '../paginationAdmin';
import TableAdminNews from './TableAdminNews';
import { apiAddNews, apiGetNews } from 'Services/apiNews';

const AdminNews = () => {
  const [apiNews, setApiNews] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [callApi, setCallApi] = useState({});

  useEffect(() => {
    const apiCate = async () => {
      try {
        const result = await apiGetNews();
        setApiNews(result?.data?.data);
      } catch (error) {}
    };
    apiCate();
  }, [callApi]);

  const onSubmitNews = async (value) => {
    try {
      await apiAddNews(value);
      toast.success('Thêm tin tức thành công!', {
        position: toast.POSITION.TOP_RIGHT
      });
      setCallApi(value);
    } catch (error) {
      toast.error('Thêm tin tức thất bại!', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <div className=''>
      <HeaderAdmin setToggleModal={setToggleModal} title='Thêm tin tức' />
      <TableAdminNews
        apiNews={apiNews}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        onSubmitNews={onSubmitNews}
        setCallApi={setCallApi}
      />
      <PaginationAdmin />
    </div>
  );
};

export default AdminNews;
