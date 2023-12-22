import CategoryItem from 'components/Category/CategoryItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { apiGetCategorys } from 'Services/apiCategory';

function CategoryImgs() {
  const [categoryItems,setCategoryItems] = useState([])
  console.log(categoryItems)
 useEffect(()=>{
  const apiCate = async()=>{
    const result = await apiGetCategorys()
    // setCategoryItems(result)
  }
  apiCate()
 },[])
 
  return (
    <div className='my-10 w-[1180px] m-auto text-center'>
      <div className=''>
        <div className='my-10 w-1180'>
          <Swiper spaceBetween={40} slidesPerView={6}>
            {categoryItems.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <CategoryItem data={item}>
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
