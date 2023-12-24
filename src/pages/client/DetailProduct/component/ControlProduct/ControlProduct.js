/* eslint-disable jsx-a11y/alt-text */
import { ThemeContext } from 'App';
import { CartIconFull } from 'components/Icon/Icon';
import { HandleAddCart } from 'components/ProductItem/HandleCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const products = [
  {
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/27070200003-1-e0e58f6f44544358bf.png?v=1685369790653',
    price: '361.900₫'
  },
  {
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/a001-153502000-1-e977ee61556d496.png?v=1685369389640',
    price: '93.500₫'
  },
  {
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/835-2-db688a35592c4474801e0bad8b.png?v=1685370024713',
    price: '1.652.200₫'
  },
  {
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/820-1-e833852bfe4a4ca6a9560c9104.png?v=1685370001430',
    price: '484.000₫'
  },
  {
    img: '//bizweb.dktcdn.net/thumb/large/100/485/241/products/a001-041264074-2-2003d3044e004d7.png?v=1685370049923',
    price: '91.300₫'
  }
];

function ControlProduct({data}) {
  const renderContext = useContext(ThemeContext)
  const price = data?.priceRoot - (data?.priceRoot / 100) * data?.discount;

  const handleAddProductCart = ()=>{
    HandleAddCart(data,renderContext.setRenderApp)
    toast.success("Thêm vào giỏ hàng thành công!", {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  return (
    <div className='text-sm px-3 font-medium'>
      {/* <h1 className='font-32 mb-4 leading-9'>Bộ khay mứt 31.5cm Thiên Kim</h1> */}

      <div className='border-b border-text pb-4'>
        <span className='text-base'>Tình trạng:</span>
        <span className='ml-1 text-primary '>Còn hàng</span>
      </div>

      <div className='pt-4 border-b border-text'>
        <span className='text-[30px] font-semibold'>{price.toLocaleString()}₫</span>
        <span className='ml-3 line-through'>{data?.priceRoot.toLocaleString()}₫</span>
        <div className='my-1'>
          <span className=''>Tiết kiệm:</span>
          <span className='text-red ml-1'>{(data?.priceRoot-price).toLocaleString()}</span>
        </div>
      </div>

      <div className='pt-3 flex items-center gap-2'>
        <button
          className='hover:bg-primary flex_center flex-1 gap-3 text-base font-semibold text-primary hover:text-white
        border-primary p-[8px_12px] h-11 border-[1px] rounded-md'
          onClick={handleAddProductCart}>
          <span className=''>
            <CartIconFull />
          </span>
          <span>THÊM VÀO GIỎ</span>
        </button>
      </div>

        <div className='border-[1px] border-text rounded-md p-3 mt-5'>
          <h3 className='font-16 mb-4'>Các sản phẩm thường được mua kèm</h3>
          <ul className='flex_center'>
            {products.map((item, index) => {
              return (
                <li key={index} className='flex-1 text-center flex flex-col items-center'>
                  <Link to='/san-pham' className='w-[80px] h-[80px] flex_center'>
                    <img src={item.img}></img>
                  </Link>
                  <span className='font-bold text-primary'>{item.price}</span>
                </li>
              );
            })}
          </ul>
        </div>

      <div className='grid grid-cols-2 mt-5 gap-2'>
        <div className='flex gap-2 items-center'>
          <img
            width='25px'
            height='25px'
            src='//bizweb.dktcdn.net/100/485/241/themes/911577/assets/chinhsach_1.jpg?1700209535143'></img>
          <span className=''>Miễn phí giao hàng</span>
        </div>
        <div className='flex gap-2 items-center'>
          <img
            width='25px'
            height='25px'
            src='//bizweb.dktcdn.net/100/485/241/themes/911577/assets/chinhsach_2.jpg?1700209535143'></img>
          <span className=''>Cam kết hàng chính hãng 100%</span>
        </div>
        <div className='flex gap-2 items-center'>
          <img
            width='25px'
            height='25px'
            src='//bizweb.dktcdn.net/100/485/241/themes/911577/assets/chinhsach_3.jpg?1700209535143'></img>
          <span className=''>Đổi trả 7 ngày</span>
        </div>
        <div className='flex gap-2 items-center'>
          <img
            width='25px'
            height='25px'
            src='//bizweb.dktcdn.net/100/485/241/themes/911577/assets/chinhsach_4.jpg?1700209535143'></img>
          <span className=''>Mở hộp kiểm nha nhận hàng</span>
        </div>
      </div>

    
    </div>
  );
}

export default ControlProduct;
