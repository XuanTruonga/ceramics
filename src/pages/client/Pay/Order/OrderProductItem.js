/* eslint-disable jsx-a11y/alt-text */
function OrderProductItem({ data }) {
  let price = data.priceRoot - (data.priceRoot / 100) * data.discount;
  return (
    <div className='flex items-center font-medium text-sm mb-4'>
      <div className='border-[1px] border-text rounded relative w-[50px] h-[50px]'>
        <img className='min-w-[50px] min-h-[44px] object-contain' src={data.img}></img>
        <span className='absolute right-[-7px] top-[-7px] h-5 w-5 rounded-[50%] bg-blue flex_center text-white text-xs'>
          {data.quantityProductCart}
        </span>
      </div>
      <span className='pl-3 flex-1'>{data.name}</span>
      <span className='w-[110px] text-right inline-block pl-3 text-primaryLight mr-1'>{price.toLocaleString()}đ</span>
    </div>
  );
}

export default OrderProductItem;
