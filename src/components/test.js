
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
{/* <div className='items-center gap-4 mt-3 relative grid grid-cols-4'>
        <div
          className=' rounded-md border-[2px] border-text hover:border-primary p-[1px] 
								cursor-pointer h-[90px] flex_center overflow-hidden'>
          <img src='//bizweb.dktcdn.net/thumb/medium/100/485/241/products/untitled-2-03162065-80a1-4a78-b15c-1902bac875e1.png?v=1686285555017'></img>
        </div>
        <div
          className=' rounded-md border-[2px] border-text hover:border-primary p-[1px] 
								cursor-pointer h-[90px] flex_center overflow-hidden'>
          <img src='//bizweb.dktcdn.net/thumb/medium/100/485/241/products/a001-01359001403-29b8b6bbde80450.png?v=1686285555017'></img>
        </div>
        <div
          className=' rounded-md border-[2px] border-text hover:border-primary p-[1px] 
								cursor-pointer h-[90px] flex_center overflow-hidden'>
          <img src='//bizweb.dktcdn.net/thumb/medium/100/485/241/products/413outm2pal.png?v=1686285555017'></img>
        </div>
        <div
          className=' rounded-md border-[2px] border-text hover:border-primary p-[1px] 
								cursor-pointer h-[90px] flex_center overflow-hidden'>
          <img src='//bizweb.dktcdn.net/thumb/medium/100/485/241/products/31thwp4k00l.png?v=1686285555017'></img>
        </div>
        <div className='absolute left-1'>
          <span
            className='h-7 w-7 rounded-[50%] bg-text opacity-40 flex_center border-[1px]
									cursor-pointer border-primary'>
            <PrevIcon />
          </span>
        </div>
        <div className='absolute right-1'>
          <span
            className='h-7 w-7 rounded-[50%] bg-text opacity-40 flex_center border-[1px]
									cursor-pointer border-primary'>
            <NextIcon />
          </span>
        </div>
      </div> */}

function Example() {
  const notify = () => {

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });
  };

   return (
      <div>
        <button onClick={notify}>Notify</button>;
        <ToastContainer/>
      </div>
    );
}
export default Example;
