import { CheckIcon, CloseIcon } from 'components/Icon/Icon';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { totalProductCart } from 'components/ProductItem/HandleCart';

/* eslint-disable jsx-a11y/alt-text */
function AddCartSuccess({ toogleModeAddCart, setToogleModeAddCart ,data}) {
  const modeEl = useRef();
  let price = data.priceRoot - (data.priceRoot / 100) * data.discount;

  const handleOffModeAddCart = (e)=>{
    if(e.target===modeEl.current){
      setToogleModeAddCart(false)
    }
  }
  return (
    <div>
     <Modal>
        {toogleModeAddCart && (
          <div className='overflow'>
            <div className='fixed top-0 right-0 left-0 bottom-0 flex justify-center smooth' ref={modeEl}
              onClick={handleOffModeAddCart}
            >
              <div className='rounded-md mt-[15%] border-primary border-[1px] text-[15px] h-fit bg-white w-[420px] relative'>
                <div className='font-bold bg-primary flex gap-1 p-2 items-center text-white'>
                  <CheckIcon />
                  <span>Thêm vào giỏ hàng thành công</span>
                </div>
  
                <div className='flex p-[10px] border-primary border-b'>
                  <div className='w-[70px]'>
                    <img src='https://bizweb.dktcdn.net/thumb/compact/100/485/241/products/835-2-db688a35592c4474801e0bad8b.png'></img>
                  </div>
                  <div className='font-semibold '>
                    <span className='font-bold'>{data.name}</span>
                    <span className='text-primary block'>{price.toLocaleString()}₫</span>
                  </div>
                </div>
  
                <span className='text-sm p-2 inline-block'>Giỏ hàng của bạn hiện có {totalProductCart()} sản phẩm</span>
  
                <div className='flex p-2 gap-2'>
                  <button
                    onClick={() => setToogleModeAddCart(false)}
                    className='p-1 flex-1 h-[36px] border-[1px] border-primary hover:bg-primary cursor-pointer 
                rounded-lg text-white bg-black'>
                    Tiếp tục mua hàng
                  </button>
                  <Link to='/thanh-toan'
                    className='p-1 flex-1 h-[36px] border-[1px] border-primary hover:bg-black cursor-pointer 
                rounded-lg text-white bg-primary flex_center'>
                    Thanh toán ngay
                  </Link>
                </div>
                <div
                  className='absolute top-0 right-0 p-[8px] text-white cursor-pointer hover:text-black'
                  onClick={() => setToogleModeAddCart(false)}>
                  <CloseIcon height='24px' />
                </div>
              </div>
            </div>
          </div>
        )}
     </Modal>
    </div>
  );
}

export default AddCartSuccess;
