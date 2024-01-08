import { apiGetNews } from 'Services/apiNews';
import CategorySlide from 'components/Category/CategorySlide';
import NewsItem from 'components/NewsItem/NewsItem';
import NewSideBar from 'components/NewsSlideBar/NewSideBar';
import { useEffect, useState } from 'react';

function News() {
  const [news, setNews] = useState();
  useEffect(() => {
    const getDataNews = async () => {
      try {
        const result = await apiGetNews();
        setNews(result?.data?.data);
      } catch (error) {}
    };
    getDataNews()
  }, []);
  return (
    <div className=''>
      <CategorySlide title='Tin tức' />
      <div className='w-1180 p-[24px_0_40px_0]'>
        <div className='grid grid-cols-3 gap-10 w-full'>
          <div className='col-span-2'>
            <div className='grid grid-cols-2 gap-8'>
              {/* map news*/}
              {news && news?.map((item, index) => {
                return (
                  <div key={index} className='grid-cols-1 '>
                    <NewsItem data={item} />
                  </div>
                );
              })}
            </div>
          </div>
          {/* sildebar */}
          <div className='col-span-1'>
            <NewSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
