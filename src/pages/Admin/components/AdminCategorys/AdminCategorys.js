import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../HeaderAdmin';
import TableCateAdmin from './TableCateAdmin';
import { toast } from 'react-toastify';
import PaginationAdmin from '../paginationAdmin';
import { apiGetCategorys, apiPostCategorys } from 'Services/apiCategory';

const AdminCategorys = () => {
  const [apiCates, setApiCates] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [valueForm, setValueForm] = useState({});

  useEffect(() => {
    const apiCate = async () => {
      const result = await apiGetCategorys();
      setApiCates(result);
    };
    apiCate();
  }, [valueForm]);

  const onSubmitCate = (value) => {
    toast.success('Thêm danh mục thành công!', {
      position: toast.POSITION.TOP_RIGHT
    });
    setValueForm(value);
    if (valueForm) {
      const apiCate = async () => {
        await apiPostCategorys(value);
        setToggleModal(false);
      };
      apiCate();
    }
  };

  return (
    <div className=''>
      <HeaderAdmin setToggleModal={setToggleModal} title='Thêm danh mục'/>
      <TableCateAdmin
        apiCates={apiCates}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        onSubmitCate={onSubmitCate}
        setValueForm={setValueForm}
      />
      <PaginationAdmin/>
    </div>
  );
};

export default AdminCategorys;
