import CategorySlide from 'components/Category/CategorySlide';
import ProductItem from 'components/ProductItem/ProductItem';
import { localStorageHeartProducts } from 'components/localStorage/localStorage';

function FavoriteProduct() {
   const configHeart = localStorageHeartProducts()
   return (
      <div>
         <CategorySlide title='Sản Phẩm Yêu Thích' />
         <div className='w-1180 mb-10 mt-8'>
            <div className='grid grid-cols-4 gap-4 '>
               {configHeart.map((item,index)=>{
                  return(
                     <ProductItem data={item} key={index} index={index}/>
                  )
               })}
            </div>
         </div>
      </div>
   );
}
export default FavoriteProduct;
