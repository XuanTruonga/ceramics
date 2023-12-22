/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';

const NavAdmin = ({ active }) => {
  const [fixAvatar, setFixAvatar] = useState(false);
  const [avatar, setAvatar] = useState('');
  const refFixAvatar = useRef();
  const refAvatar = useRef();
  useEffect(() => {
    return () => {
      avatar.preview && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.parentNode !== refFixAvatar.current && e.target !== refAvatar.current) {
        setFixAvatar(false);
      }
    });
  });
  const handlePreViewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    setFixAvatar(false);
  };
  return (
    <div className='p-5 flex justify-between items-center'>
      <div>
        <span className='font-bold text-2xl'>{active}.</span>
        <h5 className='text-sm'>
          These boxes can be used to show numbers and data in a breautiful user friendly way.
        </h5>
      </div>
      <div>
        <div className='flex items-center text-14 font-bold gap-2 text-primary'>
          <div
            className='cursor-pointer w-8 h-8 bg-slate-300 rounded-[50%] overflow-hidden'
            onClick={() => setFixAvatar(!fixAvatar)}>
            <img
              ref={refAvatar}
              src={
                avatar.preview ||
                '//bizweb.dktcdn.net/100/485/241/themes/911577/assets/danhmuc_4.jpg?1700209535143'
              }></img>
          </div>
          <span>Mai Xuân Trường</span>
        </div>
        {fixAvatar && (
          <div className='absolute right-0 p-3 bg-white rounded-lg' ref={refFixAvatar}>
            <label className='block p-2'>Thay đổi ảnh đại diện:</label>
            <input type='file' className='cursor-pointer' onChange={handlePreViewAvatar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavAdmin;
