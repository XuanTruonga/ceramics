import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../HeaderAdmin';
import TableCateAdmin from './TableCateAdmin';
import PaginationAdmin from '../paginationAdmin';
import { apiGetCategorys } from 'Services/apiCategory';

const AdminCategorys = () => {
  const [apiCates, setApiCates] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [callApiCate, setCallApiCate] = useState({});
  useEffect(() => {
    const apiCate = async () => {
      try {
        const result = await apiGetCategorys({limit:10});
        setApiCates(result);
      } catch (error) {}
    };
    apiCate();
  }, [callApiCate]);

  return (
    <div className=''>
      <HeaderAdmin setToggleModal={setToggleModal} title='Thêm danh mục' />
      <TableCateAdmin
        apiCates={apiCates.data}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        setCallApiCate={setCallApiCate}
      />
      <PaginationAdmin />
    </div>
  );
};

export default AdminCategorys;
