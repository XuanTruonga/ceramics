import { Link } from 'react-router-dom';
import BgWhiteLayout from '../../Layout/LayoutSection';
import ProductItem from 'components/ProductItem/ProductItem';
import { useEffect, useState } from 'react';
import { apiGetProducts } from 'Services/apiProduct';

function GiftCompany() {
  const [dataGiftCompany,setDataGiftCompany] = useState()
  useEffect(() => {
    const apiProducts = async () => {
      try {
        const result = await apiGetProducts({limit:8,page:2});
        setDataGiftCompany(result.data);
      } catch (error) {}
    };
    apiProducts();
  }, []);
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
          {dataGiftCompany.map((item, index) => {
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
