/* eslint-disable jsx-a11y/alt-text */
import { CategoryContext } from 'UseContext/CategoryContext';
import { ProductContext } from 'UseContext/ProductContext';
import images from 'acssets/imgs/imgs';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function PopperCategory() {
  const { categories } = useContext(CategoryContext);
  const navigate = useNavigate();
  const { setFilters, filters, setCateActive } = useContext(ProductContext);
  
  const handleFillterCategory = (cate) => {
    setCateActive(cate.category_name);
    setFilters({ ...filters, category: cate?._id });
    navigate('/san-pham')
  };

  return (
    <div className='animate-slide-top hover-output min-w-[350px] bg-white rounded-b-md p-4 cursor-default shadow-md'>
      <div className=' grid grid-cols-6  w-full h-full leading-5 font-medium'>
        <div className='text-grayDark col-span-3'>
          {categories &&
            categories.map((item) => {
              return (
                <div
                  className='category-product-name hover:cursor-pointer p-2'
                  key={item?._id}
                  onClick={() => handleFillterCategory(item)}>
                  {item.category_name}
                </div>
              );
            })}
        </div>
        {/* img category popper */}
        <div className='col-span-3 p-2 row-span-2'>
          <img src={images.popperCategoryImg} alt='ảnh gặp chút sự cố'></img>
        </div>
      </div>
    </div>
  );
}

export default PopperCategory;
