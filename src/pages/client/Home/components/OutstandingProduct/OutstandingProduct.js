import ProductItem from 'components/ProductItem/ProductItem';
import LayoutSection from '../../Layout/LayoutSection';
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: 'sản phẩm',
    priceRoot: 4000000,
    discount: 37,
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/untitled-2.png?v=1686285750047'
  },
  {
    id: 2,
    name: 'gà tre',
    priceRoot: 330000,
    discount: 37,
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/untitled-2.png?v=1686285750047'
  },
  {
    id: 3,
    name: 'sứ trung hoa',
    priceRoot: 78900000,
    discount: 37,
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/untitled-2.png?v=1686285750047'
  },
  {
    id: 4,
    name: 'gốm ok',
    priceRoot: 1000800,
    discount: 37,
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/untitled-2.png?v=1686285750047'
  },
  {
    id: 5,
    name: 'đẳng cấp',
    priceRoot: 6060000,
    discount: 37,
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/untitled-2.png?v=1686285750047'
  },
  {
    id: 6,
    name: 'uy tín',
    priceRoot: 4004040,
    discount: 37,
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/untitled-2.png?v=1686285750047'
  }
];

function OutstandingProducts() {
  return (
    <LayoutSection>
      <div>
        <div className='flex justify-between items-center mb-8 -mt-5'>
          <div className='flex_center gap-6'>
            <div className='h-4 w-4 rounded-[50%] bg-red relative '>
              <span className='w-full h-full bg-primary rounded-[50%] absolute animate-ping'></span>
            </div>
            <h1 className='font-32'>Sản phẩm nổi bật</h1>
          </div>
          <ul className='flex gap-6 font-16'>
            <Link to='/san-pham' className='hover:text-primaryLight cursor-pointer'>
              Tất cả
            </Link>
            <Link to='/san-pham' className='hover:text-primaryLight cursor-pointer'>
              Bộ trà
            </Link>
            <Link to='/san-pham' className='hover:text-primaryLight cursor-pointer'>
              Cà phê
            </Link>
          </ul>
        </div>
        <div className='grid grid-cols-12 gap-5'>
          {products.map((item, index) => {
            return (
              <div className='col-span-3' key={index}>
                <ProductItem data={item}/>
              </div>
            );
          })}
          
        </div>
        <div className='text-center mt-10'>
          <Link to='/san-pham' className='button-l transition'>
            XEM TẤT CẢ
          </Link>
        </div>
      </div>
    </LayoutSection>
  );
}

export default OutstandingProducts;
