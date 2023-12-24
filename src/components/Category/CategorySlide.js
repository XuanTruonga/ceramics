import CategoryItem from 'components/Category/CategoryItem';
import { NextIcon } from 'components/Icon/Icon';
import { Link } from 'react-router-dom';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import { apiGetCategorys } from 'Services/apiCategory';

function CategorySlide({ title = 'GỐM SỨ' }) {
  const [categoryItems, setCategoryItems] = useState([]);
  useEffect(() => {
    const apiCate = async () => {
      const result = await apiGetCategorys();
      setCategoryItems(result);
    };
    apiCate();
  }, []);

  return (
    <div
      className='mb-5 bg-no-repeat bg-center mt_84 h-[380px]'
      style={{
        backgroundImage: 'url(//bizweb.dktcdn.net/100/485/241/themes/911577/assets/breadcrumb.jpg?1700209535143)'
      }}>
      <div className='py-5 text-center'>
        {/* title */}
        <div className=''>
          <h1 className='text-primary font-bold text-[35px]'>{title}</h1>
          <ul className='text-sm p-4 font-medium'>
            <li className='flex_center'>
              <Link to='/' className='hover:text-primary transition'>
                Trang chủ
              </Link>
              <span className='p-2'>
                <NextIcon height='12px' />
              </span>
              <span className='text-primary'>{title}</span>
            </li>
          </ul>
        </div>
        {/* body */}
        <div className='flex justify-center'>
          <div className='w-[777px]'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}>
              {categoryItems.length > 0 && categoryItems.map((item, index) => {
                return (
                  <SwiperSlide className='!flex justify-center' key={item.img}>
                    <CategoryItem data={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySlide;
