/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { apiGetProducts } from 'Services/apiProduct';
import { ProductContext } from 'UseContext/ProductContext';
import { SearchIcon } from 'components/Icon/Icon';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductSearchDefault({ setModeSearch }) {
  const [products, setProducts] = useState();
  const [prams, setPram] = useState({ limit: 3 });
  const { showDetailProduct } = useContext(ProductContext);
  useEffect(() => {
    const getDataProduct = async () => {
      const result = await apiGetProducts(prams);
      setProducts(result.data);
    };
    getDataProduct();
  }, [prams]);

  const handleSearchProduct = (e) => {
    if (e.target.value.trim()) {
      setPram({ search: e.target.value });
    } else {
      setPram({ limit: 3 });
    }
  };

  return (
    <div className=''>
      {/* header */}
      <div>
        <div className='border overflow-hidden rounded-md text-sm flex'>
          <input
            onChange={handleSearchProduct}
            className='flex-1 outline-none p-[12px]'
            placeholder='Nhập tên sản phẩm...'></input>
          <span className=' flex_center px-[12px] border-l-[1px] border-[#ccc] hover:bg-slate-100 cursor-pointer'>
            {' '}
            <SearchIcon />
          </span>
        </div>
      </div>
      {/* body */}
      <div className='mt-5 font-bold'>
        <div className='mb-5 text-xl '>Sản phẩm được tìm nhiều nhất</div>
        <div className='overflow-auto'>
          {/* map product */}
          {products &&
            products.map((product, index) => {
              let price = product.priceRoot - (product.priceRoot / 100) * product.discount;
              return (
                <div key={index} className='mb-4 flex'>
                  <Link
                    onClick={() => {
                      showDetailProduct(product);
                      setModeSearch(false);
                    }}
                    to={'/san-pham/' + product._id}
                    className='w-[70px] h-[70px] bg-[#ffc444] flex_center rounded'>
                    <img src={product.img}></img>
                  </Link>

                  <div className='px-2 flex-1 text-[15px]'>
                    <Link
                      onClick={() => {
                        showDetailProduct(product);
                        setModeSearch(false);
                      }}
                      to={'/san-pham/' + product._id}
                      className='block mb-[10px] hover:text-primaryLight transition'>
                      <span>{product.name}</span>
                    </Link>
                    <div className='text-red font-extrabold'>{price.toLocaleString()}đ</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductSearchDefault;
