/* eslint-disable jsx-a11y/alt-text */
import CategorySlide from 'components/Category/CategorySlide';
import ImgDetail from './component/ImgDetail/ImgDetail';
import ControlProduct from './component/ControlProduct/ControlProduct';
import DescProduct from './component/DescProduct/DescProduct';
import SlideProductItem from 'components/SlideProductsItem/SildeProductsItem';
import { useContext } from 'react';
import { ProductContext } from 'UseContext/ProductContext';

function DetailProduct() {
  const productContext = useContext(ProductContext);
  const { productDetail } = productContext;

  return (
    <div>
      <div>
        <CategorySlide title={productDetail?.name} />
        <div className='w-1180 mb-9'>
          {/* head */}
          <div>
            <div className='grid grid-cols-2 gap-5'>
              {/* img sp*/}
              <ImgDetail data={productDetail} />
              {/*control product*/}
              <div className='col-span-1'>
                <ControlProduct data={productDetail} />
              </div>
            </div>
            {/* body */}
            <div>
              <DescProduct data={productDetail} />
              <SlideProductItem title='Sản phẩm liên quan' />
              <div className='-mt-16'>
                <SlideProductItem title='Sản phẩm đã xem' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
