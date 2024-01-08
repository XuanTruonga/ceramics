import CategoryItem from 'components/Category/CategoryItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useContext } from 'react';
import { CategoryContext } from 'UseContext/CategoryContext';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from 'UseContext/ProductContext';

function CategoryImgs() {
  const { categories } = useContext(CategoryContext);
  const navigate = useNavigate();
  const { setFilters, filters, setCateActive } = useContext(ProductContext);

  const handleFillterCategory = (cate) => {
    setCateActive(cate.category_name);
    setFilters({ ...filters, category: cate?._id });
    navigate('/san-pham');
  };

  return (
    <div className='my-10 w-[1180px] m-auto text-center'>
      <div className=''>
        <div className='my-10 w-1180'>
          <Swiper spaceBetween={40} slidesPerView={6}>
            {categories &&
              categories.map((item) => {
                return (
                  <SwiperSlide key={item._id}>
                    <div>
                      <CategoryItem data={item} onClick={() => handleFillterCategory(item)}>
                        <div className='text-primaryLight text-xs'>sản phẩm...</div>
                      </CategoryItem>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CategoryImgs;
