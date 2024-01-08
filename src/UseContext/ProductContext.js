/* eslint-disable react-hooks/exhaustive-deps */
import { apiGetProducts } from 'Services/apiProduct';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDetail, setProductDetail] = useState();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ page: 1, limit: 12 });
  const [cateActive, setCateActive] = useState(null);

  useEffect(() => {
    const apiProduct = async () => {
      try {
        const result = await apiGetProducts(filters);
        setProducts(result);
      } catch (error) {}
    };
    apiProduct();
  }, [filters]);

  const showDetailProduct = (data) => {
    if (data) {
      const { description, img, priceRoot, discount, name } = data;
      setProductDetail(data);
      localStorage.setItem('productDetail', JSON.stringify({ description, img, priceRoot, discount, name }));
    }
  };

  useEffect(() => {
    if (!productDetail) {
      const dataProductLocale = JSON.parse(localStorage.getItem('productDetail'));
      setProductDetail(dataProductLocale);
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{ productDetail, showDetailProduct, setFilters, products, filters,setCateActive,cateActive,setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
