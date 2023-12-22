import { CloseIcon } from 'components/Icon/Icon';
import ControlProduct from 'pages/client/DetailProduct/component/ControlProduct/ControlProduct';
import ImgDetail from 'pages/client/DetailProduct/component/ImgDetail/ImgDetail';
import { useRef, useState } from 'react';
import Modal from './Modal';
import AddCartSuccess from './AddCartSuccess';

function ModeQuickView({ toogleModeProduct, setToogleModeProduct, data={} }) {
  const [toogleModeAddCart, setToogleModeAddCart] = useState(false);
  const modeEl = useRef();

  const handleOffMode = (e) => {
    if (e.target === modeEl.current) {
      setToogleModeProduct(false);
    }
  };
  return (
    <div>
      <Modal>
        {toogleModeProduct && (
          <div className='overflow'>
            <div
              ref={modeEl}
              className='fixed top-0 left-0 right-0 bottom-0 flex justify-center'
              onClick={handleOffMode}>
              <div
                className='bg-white mt-11 border-[2px] border-primary rounded-lg h-fit w-[70vw] relative
               animate-[scale_0.2s_linear]'>
                <div className='p-6 h-full flex'>
                  <div className='w-[45%] px-4'>
                    <ImgDetail></ImgDetail>
                  </div>
                  <div className='w-[55%] px-4'>
                    <ControlProduct
                      PurchasTogether={false}
                      data={data}
                      setToogleModeAddCart={setToogleModeAddCart}
                      setToogleModeProduct={setToogleModeProduct}
                    />
                  </div>
                </div>
                <div
                  className='absolute right-0 top-0 p-3 cursor-pointer hover:opacity-70'
                  onClick={() => setToogleModeProduct(false)}>
                  <CloseIcon height='28px' />
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <AddCartSuccess toogleModeAddCart={toogleModeAddCart} setToogleModeAddCart={setToogleModeAddCart} data={data}/>
    </div>
  );
}

export default ModeQuickView;
