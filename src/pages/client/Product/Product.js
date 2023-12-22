import CategorySlide from 'components/Category/CategorySlide';
import { AscendingIcon, CategoryIcon, DescendingIcon, NextIcon } from 'components/Icon/Icon';
import ProductItem from 'components/ProductItem/ProductItem';
import { apiGetProducts } from 'Services/apiProduct';
import { useEffect, useState } from 'react';

const categorys = [
  'Sản phẩm',
  'Tô - Chén - Dĩa',
  'Thố - Khay',
  'Ca - Ly',
  'Bộ Trà',
  'Cà phê',
  'Phụ kiện trà - cà phê',
  'Phụ kiện cà phê',
  'Ly sứ dưỡng sinh',
  'Hộp sứ dưỡng sinh',
  'Đũa sứ',
  'Muỗng - Đũa',
  'Túi vải canvas',
  'Gác đũa sứ',
  'Phụ kiện khác',
  'Tượng Linh Vật',
  'Tượng trang trí',
  'Bình Hoa',
  'Luna',
  'Vesta',
  'Ấm - Chảo'
];

const sortProducts = [
  {
    title: 'Phổ biến'
  },
  {
    title: 'A - Z'
  },
  {
    title: 'Z - A'
  },
  {
    title: 'Giá giảm dần',
    icon: DescendingIcon
  },
  {
    title: 'Giá tăng dần',
    icon: AscendingIcon
  }
];
function Product() {
  const [cateActive, setCateActive] = useState('Sản phẩm');
  const [sortActive, setSortActive] = useState(sortProducts[0].title);  
  const [products,setProducts] = useState([])

  useEffect(()=>{
   const apiCate = async()=>{
     const result = await apiGetProducts()
     setProducts(result)
   }
   apiCate()
  },[])
  
  return (
      <div className=''>
        <CategorySlide title='Sản Phẩm' />
        <div className='w-1180 text-sm font-semibold'>
          <div className='grid grid-cols-5 gap-8'>
            {/* cate */}
            <div className='col-span-1 p-2'>
              <div className='border-b border-text flex items-center gap-2 pb-2'>
                <CategoryIcon />
                <h3 className='font-18 leading-10'>Danh Mục</h3>
              </div>
              {/* map cate */}
              <ul className='text-[15px]'>
                {categorys.map((cate, index) => {
                  return (
                    <li
                      className='py-3 ml-2 hover:text-primary cursor-pointer'
                      onClick={() => setCateActive(cate)}
                      style={cate === cateActive ? { color: 'red', fontWeight: '900' } : {}}
                      key={index}>
                      {cate}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* body */}
            <div className='col-span-4'>
              <div className='flex  items-center gap-4 p-3 mb-3'>
                <span>Sắp xếp:</span>
                {/* map control fillter procuct */}
                {sortProducts.map((item, index) => {
                  let IconFillter = item.icon;
                  return (
                    <button
                      key={index}
                      className='btn-control-page_product flex_center gap-1'
                      onClick={()=>setSortActive(item.title)}
                      style={sortActive === item.title ? { color: '#fff', backgroundColor: '#ca6f04' } : {}}>
                      {item.icon && <IconFillter />}
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>
                {/* map product */}
              <div className='grid grid-cols-4 gap-4'>
                {products.map((item, index) => {
                  return (
                    <div key={index} className='col-span-1'>
                      <ProductItem data={item} />
                    </div>
                  );
                })}
              </div>
              
              {/* footer phân trang*/}
              <ul className='flex_center gap-2 my-11'>
                <li className='btn-pagination flex_center bg-primary text-white font-bold'>1</li>
                <li className='btn-pagination flex_center relative transition'>2</li>
                <li className='btn-pagination flex_center relative transition'>3</li>
                <li className='btn-pagination flex_center relative transition'>4</li>
                <li className='btn-pagination flex_center relative transition'>
                  <NextIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Product;
