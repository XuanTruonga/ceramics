import React from 'react';

const SkeletonProduct = () => {
  return (
    <div className='flex w-[1180px]'>
      <div className='w-[30%]'></div>
      <div role='status' class='animate-pulse grid grid-cols-4 mt-28 w-[70%] gap-5'>
        <div class='col-span-1 h-[300px] bg-slate-200 rounded-lg dark:bg-gray-700'></div>
        <div class='col-span-1 h-[300px] bg-slate-200 rounded-lg dark:bg-gray-700'></div>
        <div class='col-span-1 h-[300px] bg-slate-200 rounded-lg dark:bg-gray-700'></div>
        <div class='col-span-1 h-[300px] bg-slate-200 rounded-lg dark:bg-gray-700'></div>
        <div class='col-span-1 h-[300px] bg-slate-200 rounded-lg dark:bg-gray-700'></div>
        <div class='col-span-1 h-[300px] bg-slate-200 rounded-lg dark:bg-gray-700 '></div>
        <div class='col-span-1 h-[300px] bg-slate-200 rounded-lg dark:bg-gray-700 '></div>
        <div class='col-span-1 h-[300px] bg-slate-200 rounded-lg dark:bg-gray-700 '></div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
