/* eslint-disable jsx-a11y/anchor-has-content */
import CategorySlide from 'components/Category/CategorySlide';
import { AscendingIcon, CategoryIcon, DescendingIcon } from 'components/Icon/Icon';
import ProductItem from 'components/ProductItem/ProductItem';
import { useContext, useEffect, useState } from 'react';
import Pagination from 'components/Pagination/Pagination';
import { apiGetCategorys } from 'Services/apiCategory';
import { ProductContext } from 'UseContext/ProductContext';
import { cn } from 'ultis/cn';
import SkeletonProduct from 'components/SkeletonProduct/LoadingSkeleton';

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
  const [sortActive, setSortActive] = useState(sortProducts[0].title);
  const [categories, setCategories] = useState();
  const { products, setFilters, filters, setCateActive, cateActive, setProducts } = useContext(ProductContext);

  useEffect(() => {
    const getDataCategories = async () => {
      try {
        const result = await apiGetCategorys();
        setCategories(result.data);
      } catch (error) {}
    };
    getDataCategories();
  }, []);

  const handleFillterCategory = (cate) => {
    setCateActive(cate.category_name);
    setFilters({ ...filters, category: cate?._id });
  };

  const handleFitterProduct = (item) => {
    setSortActive(item.title);
    switch (item.title) {
      case 'Giá giảm dần':
        setFilters({ sort_price: -1, limit: 12, page: 1 });
        break;
      case 'Giá tăng dần':
        setFilters({ sort_price: 1, limit: 12, page: 1 });
        break;
      case 'A - Z':
        const strAscending = [...products.data].sort((a, b) => (a.name > b.name ? 1 : -1));
        setProducts({ ...products, data: [...strAscending] });
        break;
      case 'Z - A':
        const strDiscending = [...products.data].sort((a, b) => (a.name > b.name ? -1 : 1));
        setProducts({ ...products, data: [...strDiscending] });
        break;

      default:
        break;
    }
  };
  return (
    <>
      {products && categories ? (
        <div>
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
                  <li
                    className='py-3 ml-2 hover:text-primary cursor-pointer'
                    style={!cateActive ? { color: 'red', fontWeight: '900' } : {}}
                    onClick={() => {
                      setFilters({ limit: 12, page: 1 });
                      setCateActive(null);
                    }}>
                    <a href='#product'>Tất cả</a>
                  </li>
                  {categories &&
                    categories.map((cate, index) => {
                      return (
                        <li key={index} className='flex gap-1 items-center'>
                          <div className='h-2 w-2 rounded-[50%] bg-red relative '>
                            <span className='w-full h-full bg-primary rounded-[50%] absolute animate-ping'></span>
                          </div>
                          <a
                            href='#product'
                            className='py-3 ml-2 hover:text-primary cursor-pointer block'
                            onClick={() => handleFillterCategory(cate)}
                            style={cate.category_name === cateActive ? { color: 'red', fontWeight: '900' } : {}}>
                            {cate.category_name}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
              {/* body */}
              <div className='col-span-4' id='product'>
                <div className='flex  items-center gap-4 p-3 mb-3'>
                  <span>Sắp xếp:</span>
                  {/* map control fillter procuct */}
                  {sortProducts.map((item, index) => {
                    let IconFillter = item.icon;
                    return (
                      <button
                        key={index}
                        className={cn('btn-control-page_product flex_center gap-1', {
                          'bg-[#ca6f04] text-white': sortActive === item.title
                        })}
                        onClick={() => handleFitterProduct(item)}>
                        {item.icon && <IconFillter />}
                        <span>{item.title}</span>
                      </button>
                    );
                  })}
                </div>
                {/* map product */}
                {products?.data?.length > 0 ? (
                  <div>
                    <div className='grid grid-cols-4 gap-4'>
                      {products?.data &&
                        products?.data?.map((item, index) => {
                          return (
                            <div key={index} className='col-span-1'>
                              <ProductItem data={item} />
                            </div>
                          );
                        })}
                    </div>
                    <Pagination api={products} filters={filters} setFilters={setFilters} />
                  </div>
                ) : (
                  <div className='w-full p-5 rounded-lg bg-[#fff3cd]'>Sản phẩm đang được cập nhật.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SkeletonProduct />
      )}
    </>
  );
}

export default Product;
