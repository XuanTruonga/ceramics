import React, { useEffect, useState } from 'react';
import PaginationAdmin from '../paginationAdmin';
import TableOrderAdmin from './TableOrderAdmin';
import { apiGetOrder } from 'Services/apiOrder';

const AdminOrder = () => {
  const [apiOder, setApiOder] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [valueForm, setValueForm] = useState({});

  useEffect(() => {
    const apiOder = async () => {
      const result = await apiGetOrder();
      setApiOder(result);
    };
    apiOder();
  }, [valueForm]);

  return (
    <div className=''>
      <input placeholder='Tìm kiếm?' className='outline-none border rounded-lg p-[4px_8px] ml-5 text-14 mb-5 !border-primary'></input>
      <TableOrderAdmin
        apiOder={apiOder}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        setValueForm={setValueForm}
      />
      <PaginationAdmin />
    </div>
  );
};

export default AdminOrder;
