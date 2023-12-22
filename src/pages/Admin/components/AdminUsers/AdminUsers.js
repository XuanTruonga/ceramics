import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../HeaderAdmin';
import { toast } from 'react-toastify';
import PaginationAdmin from '../paginationAdmin';
import TableCateAdmin from './TableUserAdmin';
import { apiGetUsers, apiRegisterUser } from 'Services/apiUser';

const AdminUser = () => {
  const [apiUser, setApiUser] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [valueForm, setValueForm] = useState({});

  useEffect(() => {
    const apiUser = async () => {
      const result = await apiGetUsers();
      setApiUser(result.data);
    };
    apiUser();
  }, [valueForm]);

  const onSubmitUser = (value) => {
    toast.success('Thêm danh mục thành công!', {
      position: toast.POSITION.TOP_RIGHT
    });
    setValueForm(value);
    if (valueForm) {
      const apiUser = async () => {
        await apiRegisterUser(value);
        setToggleModal(false);
      };
      apiUser();
    }
  };

  return (
    <div className=''>
      <HeaderAdmin setToggleModal={setToggleModal} title='Thêm người dùng'/>
      <TableCateAdmin
        apiUser={apiUser}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        onSubmitUser={onSubmitUser}
        setValueForm={setValueForm}
      />
      <PaginationAdmin/>
    </div>
  );
};

export default AdminUser;

