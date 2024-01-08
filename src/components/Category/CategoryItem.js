/* eslint-disable jsx-a11y/alt-text */


function CategoryItem({ size = 'w-[160px] h-[160px]', data = {}, children, onClick }) {
  return (
    <div className='w-[160px] py-5 text-center group font-16' onClick={onClick}>
      <a href={'#product'}>
        <div className={size}>
          <div className='rounded-[50%] h-full relative '>
            <img
              className='rounded-[50%] absolute top-0 img-category group-hover:top-[-12px] transition'
              src={data.img}></img>
            <span className='category-img-bofore '></span>
          </div>
        </div>
        <div className='mt-3 hover:text-primary transition'>{data.category_name}</div>
        {children}
      </a>
    </div>
  );
}

export default CategoryItem;
