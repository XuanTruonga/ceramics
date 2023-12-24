/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../HeaderAdmin';
import TableProductAdmin from './TableProductAdmin';
import { apiGetProducts } from 'Services/apiProduct';
import PaginationAdmin from '../paginationAdmin';

const AdminProducts = () => {
  const [apiProduct, setApiProduct] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [valueForm, setValueForm] = useState({});
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10
  });
  useEffect(() => {
    const apiProducts = async () => {
      try {
        const result = await apiGetProducts(filters);
        setApiProduct(result);
      } catch (error) {}
    };
    apiProducts();
  }, [valueForm]);

  return (
    <div className='font-semibold'>
      <HeaderAdmin setToggleModal={setToggleModal} title='Thêm sản phẩm' />
      <TableProductAdmin
        apiProduct={apiProduct.data}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        setValueForm={setValueForm}
      />
      <PaginationAdmin api={apiProduct} filters={filters} setFilters={setFilters} setCallApiUser={setValueForm} />
    </div>
  );
};

export default AdminProducts;
