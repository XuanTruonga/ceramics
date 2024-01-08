import CategoryItem from 'components/Category/CategoryItem';
import { NextIcon } from 'components/Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext } from 'react';
import { ProductContext } from 'UseContext/ProductContext';
import { CategoryContext } from 'UseContext/CategoryContext';

function CategorySlide({ title = 'GỐM SỨ' }) {
  const navigate = useNavigate();
  const {categories} = useContext(CategoryContext)
  const { setFilters, filters, setCateActive } = useContext(ProductContext);
  
  const handleFillterCategory = (cate) => {
    setCateActive(cate.category_name);
    setFilters({ ...filters, category: cate?._id });
    navigate('/san-pham')
  };

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
              {categories &&
                categories.map((item, index) => {
                  return (
                    <SwiperSlide className='!flex justify-center' key={item.img}>
                      <CategoryItem data={item} onClick={()=>handleFillterCategory(item)}/>
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
