/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { toast } from 'react-toastify';
import ModalFixProduct from './ModalFixProduct';
import ModalAddProduct from './ModalAddProduct';
import { apiDeleteProducts } from 'Services/apiProduct';

const TableProductAdmin = ({ apiProduct= [], toggleModal, setToggleModal, onSubmitProduct, setValueForm }) => {
  const [toggleFixProduct, settoggleFixProduct] = useState(false);
  const [itemFixProduct, setItemFixProduct] = useState({});


  const handleDeleteProduct = async (item) => {
    await apiDeleteProducts(item.id);
    setValueForm(Math.random());
    toast.error('Xóa danh mục thành công!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const handleFixProduct = (item) => {
    settoggleFixProduct(true);
    setItemFixProduct(item);
  };

  return (
    <div className='px-7'>
      <table className='text-[15px] w-full'>
        <thead>
          <tr>
            <th className='w-[40%]'>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Khuyến mại</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='font-semibold'>
          {apiProduct && apiProduct.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>
                  <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-[50%] overflow-hidden border-primaryLight border-[1px]'>
                      <img src={item.img}></img>
                    </div>
                    <span>{item.name}</span>
                  </div>
                </td>
                <td className='text-center'>{item.quantity}</td>
                <td className='text-center'>{parseInt(item.priceRoot).toLocaleString()}(đ)</td>
                <td className='text-center'>{item.discount}%</td>
                <td className='w-[16%]'>
                  <div className='font-bold flex justify-center text-xs'>
                    <button
                      className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                      onClick={() => handleFixProduct(item)}>
                      Sửa
                    </button>
                    <span className='inline-block mx-1 font-normal text-[20px]'>/</span>
                    <button
                      className='p-[2px_12px] rounded border bg-blue text-white hover:bg-blueBold'
                      onClick={() => handleDeleteProduct(item)}>
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalFixProduct
        itemFixProduct={itemFixProduct}
        toggleModal={toggleFixProduct}
        setToggleModal={settoggleFixProduct}
        setValueForm={setValueForm}
      />
      <ModalAddProduct toggleModal={toggleModal} setToggleModal={setToggleModal} onSubmitProduct={onSubmitProduct}/>
    </div>
  );
};

export default TableProductAdmin;
