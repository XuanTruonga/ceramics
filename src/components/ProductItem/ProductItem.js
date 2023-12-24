/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartIconFull, HeartIconFull, SearchIconFull } from 'components/Icon/Icon';
import AddCartSuccess from 'components/Mode/AddCartSuccess';
import ModeQuickView from 'components/Mode/ModeQuickView';
import Popper from 'components/Popper/Popper';
import { HandleAddCart, HandleAddProductLike } from './HandleCart';
import { ThemeContext } from 'App';
import 'react-toastify/dist/ReactToastify.css';
import { localStorageHeartProducts } from 'components/localStorage/localStorage';

/* eslint-disable jsx-a11y/alt-text */

function ProductItem({ classImg = 'bg-pinkLight', data = {}, index }) {
  const [toogleModeProduct, setToogleModeProduct] = useState(false);
  const [toogleModeAddCart, setToogleModeAddCart] = useState(false);
  const [productItemModal, setProductItemModal] = useState({});

  const price = data.priceRoot - (data.priceRoot / 100) * data.discount;
  const setRenderApp = useContext(ThemeContext);
  const configHeart = localStorageHeartProducts();
  configHeart.map((item) => {
    if (item._id === data._id) {
      data = { ...data, isHeart: true };
    }
  });

  const handleLikeHeart = (e) => {
    HandleAddProductLike(data, setRenderApp.setRenderApp);
  };

  return (
    <div className='overflow-hidden max-w-[276px] w-full'>
      <div className=' relative'>
        {/* img */}
        <div className='hover-input'>
          <Link to='/san-pham'>
            <div className='w-[100%] relative overflow-hidden rounded-lg'>
              <div className='pt-[100%] smooth-zoom'>
                <img className={`absolute top-0 left-0 bottom-0 right-0 w-full h-full object-contain ${classImg}`} src={data.img}></img>
              </div>
            </div>

            <div className='text-[16px] font-medium p-[12px_8px_8px_2px] leading-5 hover:text-primary ellipsis-2 transition'>
              {data.name || 'demo'}
            </div>
            <div
              className='bg-no-repeat absolute left-0 top-0 '
              style={{
                backgroundImage:
                  'url(http://bizweb.dktcdn.net/100/485/241/themes/911577/assets/union.png?1688627722165)'
              }}>
              {data.discount && (
                <span className='text-white font-16 p-2'>{data.discount ? data.discount + '%' : null}</span>
              )}
            </div>
          </Link>
          {/* khi hover */}
          <Popper>
            <div className='absolute right-3 top-3 hover-output '>
              <div className=''>
                <div>
                  <button
                    onClick={() => setToogleModeAddCart(true)}
                    className='button-s animate-[scale_0.5s_ease-in-out] text-white'>
                    <div
                      className='w-full h-full flex_center'
                      onClick={() => HandleAddCart(data, setRenderApp.setRenderApp)}>
                      <CartIconFull />
                    </div>
                  </button>
                </div>

                <button
                  className='button-s animate-[scale_0.5s_ease-in-out] mt-3'
                  onClick={handleLikeHeart}
                  style={data.isHeart ? { color: 'red' } : { color: '#fff' }}>
                  <div>
                    <HeartIconFull />
                  </div>
                </button>
                {/* mode view product */}
                <button
                  onClick={() => {
                    setToogleModeProduct(true);
                    setProductItemModal(data);
                  }}
                  className='button-s animate-[scale_0.5s_ease-in-out] mt-3'>
                  <div>
                    <SearchIconFull color='#fff' />
                  </div>
                </button>
              </div>
            </div>
          </Popper>
        </div>
        {/* end img */}
        {/* info */}
        <div className='p-y[10px]'>
          <div className='mb-[5px] mt-4 ml-1'>
            <span className='font-16 text-red'>{price.toLocaleString()}đ</span>
            <span className='text-[15px] text-gray line-through ml-4 inline-block'>
              {data.discount ? parseInt(data.priceRoot).toLocaleString() + 'đ' : null}
            </span>
          </div>
        </div>
      </div>
      {/* mode */}
      <ModeQuickView
        toogleModeProduct={toogleModeProduct}
        setToogleModeProduct={setToogleModeProduct}
        data={productItemModal}
      />
      <AddCartSuccess
        toogleModeAddCart={toogleModeAddCart}
        setToogleModeAddCart={setToogleModeAddCart}
        data={data}
      />
    </div>
  );
}

export default ProductItem;
