/* eslint-disable jsx-a11y/alt-text */
import { CategoryContext } from 'UseContext/CategoryContext';
import NewsContext from 'UseContext/NewsContext';
import { ProductContext } from 'UseContext/ProductContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function NewSideBar() {
  const { news, showDetailNews,newsDetail } = useContext(NewsContext);
  const { categories } = useContext(CategoryContext);
  const { setFilters, filters, setCateActive } = useContext(ProductContext);

  return (
    <div>
      {/* cate */}
      <div className=''>
        <div className='font-bold text-[23px]'>DANH MỤC</div>
        <ul className='mt-5'>
          {categories &&
            categories?.map((category) => {
              return (
                <li key={category?._id} className='flex items-center'>
                  <div className='h-2 w-2 rounded-[50%] bg-primary relative '>
                    <span className='w-full h-full bg-red rounded-[50%] absolute animate-ping'></span>
                  </div>
                  <Link
                    to='/san-pham'
                    className='ml-4 font-semibold p-2 hover:text-primary transition'
                    onClick={() => {
                      setFilters({ ...filters, category: category._id });
                      setCateActive(category.category_name);
                    }}>
                    {category.category_name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      {/* outstanding news*/}
      <div className='mt-6'>
        <Link to='/tin-tuc' className='font-bold text-[23px] hover:text-primary transition'>
          TIN TỨC NỔI BẬT
        </Link>
        <div className='mt-4 pr-3'>
          {news &&
            news?.map(item => {
              return (
                <Link
                  style={item._id === newsDetail._id ? {color:'#ca6f04'} : {}}
                  to={'/tin-tuc-detail/' + item._id}
                  className='mb-5 flex'
                  key={item._id}
                  onClick={() => showDetailNews(item)}>
                  <img src={item.img} className='mr-2 rounded-xl' width='120px' height='80px'></img>
                  <p className='font-medium hover:text-primary transition'>{item.title}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default NewSideBar;
