import ProductItem from 'components/ProductItem/ProductItem';
import LayoutSection from 'pages/client/Home/Layout/LayoutSection';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
function SlideProductItem({ title, classImg, data }) {
  return (
    <div>
      <LayoutSection>
        {/* title */}
        <div className='flex justify-between mb-6'>
          <div className='flex_center gap-6'>
            <div className='h-4 w-4 rounded-[50%] bg-red relative '>
              <span className='w-full h-full bg-primary rounded-[50%] absolute animate-ping'></span>
            </div>
            <h1 className='font-32'>{title}</h1>
          </div>
        </div>
        <Swiper
          spaceBetween={0}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          navigation
          // loop={true}
          // pagination={{ clickable: true }}
        >
          {products.map((item,index) => { 
            return (
                <SwiperSlide  key={index}>
                  <div className='flex justify-center p-3'>
                    <ProductItem classImg={classImg} data={item} />
                  </div>
                </SwiperSlide>
            );
          })}
        </Swiper>
      </LayoutSection>
    </div>
  );
}

export default SlideProductItem;
