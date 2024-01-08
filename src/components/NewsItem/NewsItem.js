/* eslint-disable jsx-a11y/alt-text */
import NewsContext from 'UseContext/NewsContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { showDate, showHour } from 'ultis/convert';

function NewsItem({ data }) {

  const { showDetailNews } = useContext(NewsContext);
  return (
    <Link to={'/tin-tuc-detail/' + data._id} onClick={() => showDetailNews(data)}>
      <div className='block overflow-hidden rounded-lg '>
        <img className='rounded-lg hover:scale-110 transition' src={data.img}></img>
      </div>
      <span className='block mb-1 text-sm font-medium mt-2'>{showDate(data.createdAt)+' '+showHour(data.createdAt)}</span>

      <div>
        <div className='ellipsis-2 mb-1 font-18 hover:text-primary transition'>{data.title}</div>
        <p className='ellipsis-3 mb-4 text-sm font-medium'>{data.description}</p>
      </div>
      <div className='hover-input flex justify-center'>
        <span className='text-primary font-semibold inline-block relative hover:text-primaryLight transition'>
          Xem thêm
          <span className='absolute rounded-lg h-[2px] left-0 bg-red bottom-0 animate-develop hover-output'></span>
        </span>
      </div>
    </Link>
  );
}

export default NewsItem;
