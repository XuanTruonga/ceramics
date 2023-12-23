/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../HeaderAdmin';
import { toast } from 'react-toastify';
import PaginationAdmin from '../paginationAdmin';
import TableCateAdmin from './TableUserAdmin';
import { apiGetUsers, apiRegisterUser } from 'Services/apiUser';

const AdminUser = () => {
  const [apiUser, setApiUser] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [callApiUser, setCallApiUser] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [filters, setFilters] = useState({
    page:1,
    limit:8
  });
  useEffect(() => {
    const apiUser = async () => {
      try {
        const result = await apiGetUsers(filters);
        setApiUser(result);
      } catch (error) {}
    };
    apiUser();
  }, [callApiUser]);

  const onSubmitUser = async (data) => {
    try {
      await apiRegisterUser(data);
      setToggleModal(false);
      toast.success('Đăng ký thành công !', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      setErrorMessage(error.response.data?.message?.email || error.response.data?.message?.username || '');
    }
  };

  return (
    <div className=''>
      <HeaderAdmin setToggleModal={setToggleModal} title='Thêm người dùng' />
      <TableCateAdmin
        errorMessage={errorMessage}
        apiUser={apiUser}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        onSubmitUser={onSubmitUser}
        setCallApiUser={setCallApiUser}
      />
      <PaginationAdmin apiUser={apiUser} setFilters={setFilters} filters={filters} setCallApiUser={setCallApiUser}/>
    </div>
  );
};

export default AdminUser;
