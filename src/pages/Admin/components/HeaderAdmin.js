import React from 'react';

const HeaderAdmin = ({ setToggleModal, title }) => {
  return (
    <div className='mb-6'>
      <div>
        <button className='button-add-product' onClick={() => setToggleModal(true)}>
          {title}
        </button>
        <input placeholder='Tìm kiếm?' className='outline-none border rounded-lg p-[4px_8px] ml-5 text-14'></input>
      </div>
    </div>
  );
};

export default HeaderAdmin;
