/* eslint-disable jsx-a11y/alt-text */
import NewsContext from 'UseContext/NewsContext';
import CategorySlide from 'components/Category/CategorySlide';
import FormCommentNews from 'components/Form/FormComment/FormComment';
import { AdminIcon, ClockIcon } from 'components/Icon/Icon';
import NewsItem from 'components/NewsItem/NewsItem';
import NewSideBar from 'components/NewsSlideBar/NewSideBar';
import { useContext, useState } from 'react';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

function NewsDetail() {
  const [comments, SetComents] = useState([]);
  const { newsDetail, news } = useContext(NewsContext);
  const date = new Date();
  const onSubmit = (values) => {
    SetComents([...comments, values]);
  };
  return (
    <div className=''>
      <div className=''>
        <CategorySlide title='Tin Tức Detail' />
        <div className='w-1180'>
          <div>
            <div className='grid grid-cols-3 gap-7'>
              <div className='col-span-2'>
                <div>
                  <h1 className='font-bold text-3xl mb-4'>{newsDetail?.title}</h1>

                  <div className='mb-[10px]'>
                    <div className='flex gap-6 mb-[10px] font-semibold'>
                      <div className='text-primaryLight flex items-center gap-2'>
                        <ClockIcon />
                        <span className='text-black text-sm'>10 tháng 06 2023</span>
                      </div>

                      <div>
                        <div className='text-primaryLight flex items-center gap-2'>
                          <AdminIcon />
                          <span className='text-black text-sm'>{newsDetail?.author}</span>
                        </div>
                      </div>
                    </div>
                    <p className='text-sm font-medium'>{newsDetail?.description}</p>
                  </div>

                  <div className='text-sm font-medium '>
                    {newsDetail?.title}
                    <div dangerouslySetInnerHTML={{ __html: newsDetail?.detail_news }}></div>
                  </div>
                </div>
              </div>

              <div className='col-span-1'>
                <NewSideBar />
              </div>
            </div>
            {/* bình luận */}
            <div>
              <div className='p-2 mt-16'>
                <h1 className='font-bold text-2xl text-primary'>VIẾT BÌNH LUẬN CỦA BẠN</h1>

                <FormCommentNews onSubmit={onSubmit} comments={comments} />

                <div className='pl-3'>
                  {comments && (
                    <div className='font-medium mt-3 pb-4'>
                      <span>Bình luận </span>
                      <span>{`(${comments.length})`}</span>
                    </div>
                  )}
                  {comments.map((comment, index) => {
                    return (
                      <div className='flex mb-5' key={index}>
                        <div className='h-16 w-16'>
                          <img src='https://www.gravatar.com/avatar/d83b29102a25972c094a42b1f9c80da1?s=110&d=identicon'></img>
                        </div>
                        <div className='flex flex-col ml-[10px] font-normal'>
                          <span className='font-semibold'>{comment.fullName}</span>
                          <span className='text-sm'>
                            <span>{date.getDate()}/</span>
                            <span>{date.getMonth() + 1}/</span>
                            <span>{date.getFullYear()}</span>
                          </span>
                          <span className='text-sm'>{comment.content}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* tin tức liên quan */}
            <div>
              <div className='mt-8'>
                <h1 className='font-32'>Tin liên quan</h1>
                <div className='w-[1180px]'>
                  <Swiper spaceBetween={40} slidesPerView={3}>
                    {news &&
                      news.map((item) => {
                        return (
                          <SwiperSlide key={item._id}>
                            <NewsItem data={item} />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
                {/* <Swiper slidesPerView={4} navigation pagination={{ clickable: true }}>
                  {news &&
                    news?.map((item, index) => {
                      return (
                        <SwiperSlide className='w-[32%] flex-shrink-0' key={index}>
                          <NewsItem data={item} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
