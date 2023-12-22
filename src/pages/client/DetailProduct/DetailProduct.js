/* eslint-disable jsx-a11y/alt-text */
import CategorySlide from 'components/Category/CategorySlide';
import ImgDetail from './component/ImgDetail/ImgDetail';
import ControlProduct from './component/ControlProduct/ControlProduct';
import DescProduct from './component/DescProduct/DescProduct';
import SlideProductItem from 'components/SlideProductsItem/SildeProductsItem';

function DetailProduct() {
  return (
    <div>
      <CategorySlide title='san pham' />
      <div className='w-1180 mb-9'>
        {/* head */}
        <div>
          <div className='grid grid-cols-2 gap-5'>
            {/* img sp*/}
            <ImgDetail />
            {/*control product*/}
            <div className='col-span-1'>
              <ControlProduct />
            </div>
          </div>
          {/* body */}
          <div>
            <DescProduct />
            <SlideProductItem title='Sản phẩm liên quan' />
            <div className='-mt-16'>
              <SlideProductItem title='Sản phẩm đã xem' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
