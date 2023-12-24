/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import CategorySlide from 'components/Category/CategorySlide';
import {
  HandleDeleteProduct,
  HandleDownProduct,
  HandleUpProduct,
  totalMoney
} from 'components/ProductItem/HandleCart';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from 'App';


function Cart() {
  const setRenderApp = useContext(ThemeContext)
  const data = JSON.parse(localStorage.getItem('Cart')) || [];
  return (
    <div className='bg-slate-50'>
      <CategorySlide title='Giỏ Hàng' />
      <div className='w-1180'>
        <div className='font-14 flex-1 mb-10'>
          <table className='w-full border h-[120px]'>
            <thead className='bg-primaryLight'>
              <tr>
                <th className='border' style={{ width: '55%' }}>
                  Thông tin sản phẩm
                </th>
                <th className='w-[15%]'>Đơn giá</th>
                <th className='w-[15%]'>Số lượng</th>
                <th className='w-[15%]'>Thành tiền</th>
              </tr>
            </thead>

            <tbody className='text-center'>
              {data.length > 0 ? (
                data.map((item, index) => {
                  let price = item.priceRoot - (item.priceRoot / 100) * item.discount;
                  return (
                    <tr key={index}>
                      <td className='text-left'>
                        <div className='flex items-center gap-7'>
                          <Link to='/san-pham'>
                            <img
                              className='h-[100px] w-[100px] border-[1px] ml-2 border-slate-200 rounded-[50%] object-contain bg-pink '
                              src={item.img}></img>
                          </Link>
                          <div>
                            <Link to='/san-pham' className='block hover:text-primary transition'>
                              {item.name}
                            </Link>
                            <span
                              onClick={() => HandleDeleteProduct(index,setRenderApp.setRenderApp)}
                              className='p-1 inline-block text-base text-primaryLight hover:text-primary 
                                    transition font-medium cursor-pointer'>
                              Xóa
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className='text-primary'>{price.toLocaleString()}₫</td>
                      <td>
                        <div className='wrapper-up-down font-medium'>
                          <button
                            style={item.quantityProductCart === 1 ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                            className='h-[30px] w-[30px] hover:text-primary'
                            onClick={() => HandleDownProduct(data, index,setRenderApp.setRenderApp)}>
                            -
                          </button>
                          <span className='px-2 '>{item.quantityProductCart}</span>
                          <button
                            className='h-[30px] w-[30px] hover:text-primary'
                            onClick={() => HandleUpProduct(data, index,setRenderApp.setRenderApp)}
                            style={item.quantityProductCart === data[index].quantity ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                            >
                            +
                          </button>
                        </div>
                      </td>
                      <td className='text-primary'>{(price * item.quantityProductCart).toLocaleString()}đ</td>
                    </tr>
                  );
                })
              ) : (
                <td><div className='w-full flex_center h-full text-primary text-base'>Chưa có sản phẩm nào.</div></td>
              )}
            </tbody>
          </table>
          <div className='text-end'>
            <div className='my-5'>
              <span className='inline-block mr-2 text-base'>Tổng tiền:</span>
              <span className='min-w-[130px] inline-block text-primary text-lg'>{totalMoney(data).toLocaleString()}đ</span>
            </div>
            <Link
              to='/thanh-toan'
              className='p-[8px_32px] text-base text-white rounded-lg font-medium bg-primary hover:opacity-90 
                  transition text-center cursor-pointer min-w-[210px] inline-block'>
              THANH TOÁN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
