/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';

function NewsItem({ data }) {
   return (
      <div className=''>
         <Link to='/tin-tuc-detail' className='block overflow-hidden rounded-lg '>
            <img className='rounded-lg hover:scale-110 transition' src={data.img}></img>
         </Link>
         <span className='block mb-1 text-sm font-medium mt-2'>{data.date}</span>

         <div>
            <Link to='/tin-tuc-detail' className='ellipsis-2 mb-1 font-18 hover:text-primary transition'>
               {data.title}
            </Link>
            <p className='ellipsis-3 mb-4 text-sm font-medium'>{data.desc}</p>
         </div>
         <Link to='/tin-tuc-detail' className='hover-input flex justify-center'>
            <span className='text-primary font-semibold inline-block relative hover:text-primaryLight transition'>
               Xem thêm
               <span className='absolute rounded-lg h-[2px] left-0 bg-red bottom-0 animate-develop hover-output'></span>
            </span>
         </Link>
      </div>
   );
}

export default NewsItem;
