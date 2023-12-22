import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../HeaderAdmin';
import { toast } from 'react-toastify';
import PaginationAdmin from '../paginationAdmin';
import TableProductAdmin from './TableProductAdmin';
import { apiGetProducts, apiPostProducts } from 'Services/apiProduct';

const AdminProducts = () => {
  const [apiProduct, setApiProduct] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [valueForm, setValueForm] = useState({});

  useEffect(() => {
    const apiProducts = async () => {
      const result = await apiGetProducts();
      setApiProduct(result.data);
    };
    apiProducts();
  }, [valueForm]);

  const onSubmitProduct = (value) => {
    toast.success('Thêm danh mục thành công!', {
      position: toast.POSITION.TOP_RIGHT
    });
    setValueForm(value);
    if (valueForm) {
      const apiProducts = async () => {
        await apiPostProducts(value);
        setToggleModal(false);
      };
      apiProducts();
    }
  };

  return (
    <div className='font-semibold'>
      <HeaderAdmin setToggleModal={setToggleModal} title='Thêm sản phẩm'/>
      <TableProductAdmin
        apiProduct={apiProduct}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        onSubmitProduct={onSubmitProduct}
        setValueForm={setValueForm} 
      />
      <PaginationAdmin/>
    </div>
  );
};

export default AdminProducts;