import ProductItem from 'components/ProductItem/ProductItem';
import LayoutSection from 'pages/client/Home/Layout/LayoutSection';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import { apiGetProducts } from 'Services/apiProduct';

function SlideProductItem({ title, classImg, data }) {
  const [dataCate,setDataCate] = useState()
  useEffect(() => {
    const apiProducts = async () => {
      try {
        const result = await apiGetProducts({limit:6});
        setDataCate(result.data);
      } catch (error) {}
    };
    apiProducts();
  }, []);

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
          {dataCate && dataCate.map((item,index) => { 
            return (
                <SwiperSlide  key={index}>
                  <div className='flex justify-center p-3 w-full'>
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
