/* eslint-disable jsx-a11y/alt-text */

const NavAdmin = ({ active }) => {
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
          <div className='w-8 h-8 bg-slate-300 rounded-[50%] overflow-hidden'>
            <img src='//bizweb.dktcdn.net/100/485/241/themes/911577/assets/danhmuc_4.jpg?1700209535143'></img>
          </div>
          <span>Mai Xuân Trường</span>
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
