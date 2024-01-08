/* eslint-disable jsx-a11y/alt-text */

import { Fragment, useRef } from 'react';
import ProductSearchDefault from './ProductSearchDefault';
import { CloseIcon } from 'components/Icon/Icon';

function SearchMode({ setModeSearch }) {
  const modeSearchEl = useRef();
  const handleOffModeSearch = (e) => {
    if (e.target === modeSearchEl.current) {
      setModeSearch(false);
    }
  };
  return (
    <Fragment>
      <div onClick={handleOffModeSearch} ref={modeSearchEl} className='overflow'>
        <div
          className='container z-[10000] h-[100vh] body-cart-mode overscroll-contain overflow-y-auto fixed top-0 right-0 bottom-0
         bg-white w-[380px] p-[62px_15px_0] animate-slide-left'>
          <ProductSearchDefault setModeSearch={setModeSearch} />
        </div>
        <div
          onClick={() => setModeSearch(false)}
          className='px-3 py-2 hover:bg-slate-100 rounded cursor-pointer fixed right-1 top-2 z-[10000]'>
          <CloseIcon height='30px' />
        </div>
      </div>
    </Fragment>
  );
}

export default SearchMode;
