import { Link } from 'react-router-dom';
import BgWhiteLayout from '../../Layout/LayoutSection';
import ProductItem from 'components/ProductItem/ProductItem';

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
function GiftCompany() {
  return (
    <BgWhiteLayout>
      <div>
        {/* title */}
        <div className='flex justify-between items-center mb-8 -mt-4'>
          <div className='flex_center gap-6'>
            <div className='h-4 w-4 rounded-[50%] bg-red relative '>
              <span className='w-full h-full bg-primary rounded-[50%] absolute animate-ping'></span>
            </div>
            <h1 className='font-32'>Quà tặng doanh nghiệp</h1>
          </div>
        </div>

        {/* body */}
        <div className='grid grid-cols-12 gap-5'>
          {products.map((item, index) => {
            return (
              <div className='col-span-3' key={index}>
                <ProductItem data={item} />
              </div>
            );
          })}
        </div>
        {/* fotter */}
        <div className='text-center mt-10'>
          <Link to='/san-pham' className='button-l transition'>
            XEM TẤT CẢ
          </Link>
        </div>
      </div>
    </BgWhiteLayout>
  );
}

export default GiftCompany;
