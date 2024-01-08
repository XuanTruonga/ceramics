/* eslint-disable array-callback-return */
import { apiGetCategorys } from 'Services/apiCategory';
import React, { createContext, useEffect, useState } from 'react';

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getDataCategory = async () => {
      try {
        const result = await apiGetCategorys();
        setCategories(result.data);
      } catch (error) {}
    };
    getDataCategory();
  }, []);
  return <CategoryContext.Provider value={{ categories }}>{children}</CategoryContext.Provider>;
};

export default CategoryProvider;
