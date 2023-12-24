import ProductItem from 'components/ProductItem/ProductItem';
import LayoutSection from '../../Layout/LayoutSection';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiGetProducts } from 'Services/apiProduct';
const products = [
  {
    id: 1,
    name: 'Bộ phin cà phê - Camellia - Màu cà phê',
    priceRoot: 4000000,
    discount: 37,
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/27070237703-bo-phin-ca-phe-cam.png?v=1685369825897'
  },
  {
    id: 2,
    name: 'Bộ trà cao 0.8 L - Sago - Hoa Hồng Đen khắc nổi',
    priceRoot: 3300600,
    discount: 56,
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/a001-212471497b-01-df50f9bf7adf4.png?v=1685369066860'
  },
  {
    id: 3,
    name: 'Bộ trà cao 1.3 L - Sago - Thiên Tuế',
    priceRoot: 78900000,
    discount: '',
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/063095470-95de64ad269a42d9a3b438.png?v=1685368729000'
  },
  {
    id: 4,
    name: 'Chén đường 10 cm + nắp - Sago - Hoa Hồng',
    priceRoot: 1000800,
    discount: 34,
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/153-1-b110baa25b6e4c54846e958d77-1.png?v=1685367619410'
  },
  {
    id: 5,
    name: 'Ca trà 0.30 L - Hoàng Cung - Lạc Hồng',
    priceRoot: 6060000,
    discount: '',
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/untitled-2.png?v=1686285750000'
  },
  {
    id: 6,
    name: 'Ca thon quai số 7 0.33 L - Jasmine - Trắng',
    priceRoot: 4004040,
    discount: '',
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/untitled-1-dbdc1ff3-ac6c-4e56-954f-014ee4b5ec86.png?v=1686305869000'
  }
];

function OutstandingProducts() {
  const [dataOutStanding,setDataOutStanding] = useState()
  useEffect(() => {
    const apiProducts = async () => {
      try {
        const result = await apiGetProducts({limit:6,page:2});
        setDataOutStanding(result.data);
      } catch (error) {}
    };
    apiProducts();
  }, []);
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
          {dataOutStanding && dataOutStanding.map((item, index) => {
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
