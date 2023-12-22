import { NextIcon } from 'components/Icon/Icon';
import React from 'react';

const PaginationAdmin = () => {
  return (
    <div className='w-full text-center'>
      <ul className='flex_center gap-2 my-11'>
        <li className='h-7 w-7 cursor-pointer hover:bg-blue hover:text-white rounded flex_center bg-blue text-white font-bold'>
          1
        </li>
        <li className='h-7 w-7 cursor-pointer hover:bg-blue hover:text-white rounded flex_center relative transition'>
          2
        </li>
        <li className='h-7 w-7 cursor-pointer hover:bg-blue hover:text-white rounded flex_center relative transition'>
          3
        </li>
        <li className='h-7 w-7 cursor-pointer hover:bg-blue hover:text-white rounded flex_center relative transition'>
          4
        </li>
        <li className='h-7 w-7 cursor-pointer hover:bg-blue hover:text-white rounded flex_center relative transition'>
          <NextIcon height='16px' />
        </li>
      </ul>
    </div>
  );
};

export default PaginationAdmin;
