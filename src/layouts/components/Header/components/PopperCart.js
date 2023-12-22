/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */

import {
  HandleDeleteProduct,
  HandleDownProduct,
  HandleUpProduct,
  totalMoney
} from 'components/ProductItem/HandleCart';
import { localStorageCartProducts } from 'components/localStorage/localStorage';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from 'App';

function ModeCart() {
  const setRenderApp = useContext(ThemeContext);
  const [reset, setReset] = useState();
  const dataLocalStorageCart = localStorageCartProducts();
  return (
    <div className='hover-output top-[115%] right-[2px] cursor-default transition smooth'>
      {dataLocalStorageCart.length > 0 ? (
        <div className='w-[350px] bg-white rounded shadow-md bridge nav_Admin-before'>
          <div className='inner p-1'>
            <div className='body-cart-mode text-sm max-h-[360px] text-black p-[5px_15px_15px_15px] overflow-y-scroll'>
              {/* product item */}
              {dataLocalStorageCart.map((product, index) => {
                let price = product.priceRoot - (product.priceRoot / 100) * product.discount;
                return (
                  <div key={index} className='item flex border-b border-solid border-slate-300 mt-[10px]'>
                    {/* img */}
                    <Link className='w-[80px] h-[80px]'>
                      <img src='https://bizweb.dktcdn.net/thumb/compact/100/485/241/products/untitled-2-fec4632c-f1cc-4a6f-a5f6-166c038fd371.png'></img>
                    </Link>
                    {/* content */}
                    <div className='des flex-1 pl-4'>
                      <div className='head mb-[5px]'>
                        <Link to='/san-pham' className='block mb-1 font-13 hover:text-primary transition'>
                          {product.title}
                        </Link>
                        <span
                          className='font-13 text-red cursor-pointer'
                          onClick={() => HandleDeleteProduct(index, setRenderApp.setRenderApp)}>
                          Xóa
                        </span>
                      </div>

                      <div className='fotter flex mb-[15px]'>
                        <div className='quantity flex-1'>
                          <div className='mb-[5px] text-xs'>Số lượng</div>
                          <div className='wrapper-up-down '>
                            <button
                              className='h-[30px] w-[30px] hover:bg-slate-50'
                              onClick={() => HandleDownProduct(dataLocalStorageCart, index, setRenderApp.setRenderApp)}
                              style={
                                product.quantityProductCart === 1 ? { opacity: 0.4, pointerEvents: 'none' } : {}
                              }>
                              -
                            </button>
                            <span className='px-2'>{product.quantityProductCart}</span>
                            <button
                              className='h-[30px] w-[30px] hover:bg-slate-50'
                              onClick={() => HandleUpProduct(dataLocalStorageCart, index, setRenderApp.setRenderApp)}
                              style={
                                product.quantityProductCart === dataLocalStorageCart[index].quantity
                                  ? { opacity: 0.4, pointerEvents: 'none' }
                                  : {}
                              }>
                              +
                            </button>
                          </div>
                        </div>

                        <div className='flex-1 text-right'>
                          <span className='font-14 text-primaryLight'>{price.toLocaleString()}đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* footer */}
            <div className='fotter p-[10px]'>
              <div className='mb-5 flex justify-between'>
                <span className='font-14 text-black'>Tổng tiền:</span>
                <span className='font-14 text-red'>{totalMoney(dataLocalStorageCart).toLocaleString()}đ</span>
              </div>
              <Link
                to='/thanh-toan'
                className='w-full text-white font-semibold py-2 px-4 rounded bg-primary hover:opacity-90 
                  transition text-center block'>
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='bg-white w-[250px] p-2 rounded shadow-md border-[1px] border-primaryLight h-16 font-bold flex_center'>
          Chưa có sản phẩm nào
        </div>
      )}
    </div>
  );
}

export default ModeCart;
