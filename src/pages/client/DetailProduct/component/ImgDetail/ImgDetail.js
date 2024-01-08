/* eslint-disable jsx-a11y/alt-text */


function ImgDetail({data}) {
  
  return (
    <div className='col-span-1 w-full'>
      <div className='bg-pink rounded-md pt-[70%] relative'>
        <div className="absolute right-0 top-0 left-0 bottom-0">
        <img className="object-contain w-full h-full" src={data && data?.img}></img>
        </div>
      </div>
    </div>
  );
}

export default ImgDetail;
