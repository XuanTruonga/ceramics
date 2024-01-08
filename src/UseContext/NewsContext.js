/* eslint-disable react-hooks/exhaustive-deps */
import { apiGetNews } from 'Services/apiNews';
const { createContext, useState, useEffect } = require('react');

export const NewsContext = createContext();

export const NewsProvices = ({ children }) => {
  const [news, setNews] = useState();
  const [newsDetail, setNewsDetail] = useState();

  useEffect(() => {
    const getDataNews = async () => {
      try {
        const result = await apiGetNews();
        setNews(result?.data?.data);
      } catch (error) {}
    };
    getDataNews();
  }, []);

  const showDetailNews = (data) => {
    if (data) {
      localStorage.setItem('newsDetail', JSON.stringify(data));
      const dataNewsLocale = JSON.parse(localStorage.getItem('newsDetail'));
      setNewsDetail(dataNewsLocale);
    }
  };

  useEffect(() => {
    if (!newsDetail) {
      const dataNewsLocale = JSON.parse(localStorage.getItem('newsDetail'));
      setNewsDetail(dataNewsLocale);
    }
  }, []);

  return (
    <NewsContext.Provider value={{ setNewsDetail, news, newsDetail, showDetailNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
