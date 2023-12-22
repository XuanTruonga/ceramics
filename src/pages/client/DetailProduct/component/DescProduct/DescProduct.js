import { useEffect, useRef, useState } from 'react';

const tabs = ['Mô tả sản phẩm', 'Hướng dẫn mua hàng'];

function DescProduct() {
  const [type, setType] = useState('Mô tả sản phẩm');
  const descProductEl = useRef()
  const shoppingGuideEl = useRef()
  useEffect(()=>{
    if(type === 'Mô tả sản phẩm'){
      descProductEl.current.classList.remove('hidden')
      shoppingGuideEl.current.classList.add('hidden')
    }
    if(type==='Hướng dẫn mua hàng'){
      descProductEl.current.classList.add('hidden')
      shoppingGuideEl.current.classList.remove('hidden')
    }
  },[type])
  return (
    <div className='border-b border-text pb-12'>
      <div className='flex gap-4 font-18 border-b border-text mt-8'>
        {tabs.map((tab, index) => {
          return (
            <span
              key={index}
              style={
                type === tab
                  ? { borderBottom: '3px', borderColor: '#ca6f04', color: '#ca6f04', borderStyle: 'solid' }
                  : {}
              }
              onClick={(e)=>setType(tab)}
              className='hover:border-b-[3px] hover:border-primary hover:text-primary
            cursor-pointer pb-2'>
              Mô tả sản phẩm
            </span>
          );
        })}
      </div>

      <div className='font-medium text-sm'>
        <div ref={descProductEl}>
          <p className='mt-4'>
            Tuyển chọn từ những nguyên liệu quý hiếm mỗi sản phẩm của Misc Assortment đảm bảo những tiêu chí cao
            nhất về chất lượng. Sở hữu nhiều tính năng vượt trội siêu cứng chắc, mặt men sáng bóng, khó trầy xước.
            Misc Assortment được nhiều người ưa chuộng và lựa chọn bởi sự cao cấp, an toàn, bền đẹp và thân thiện
            với môi trường. Bộ trà 0.35 l bao gồm: - 1 Bình trà 0.35 L + nắp - 6 Tách trà 0.07 L - 6 Dĩa lót tách
            11 cm
          </p>
          <p className='mt-4'>
            Gốm sứ luôn là một trong những sản phẩm truyền thống được yêu thích bởi khách hàng trên toàn thế giới.
            Với độ bền cao và tính thẩm mỹ, gốm sứ đã trở thành vật dụng không thể thiếu trong cuộc sống hằng ngày
            của mọi gia đình. Thật tuyệt vời khi một sản phẩm có thể vừa có tính nghệ thuật vừa mang lại lợi ích
            cho cuộc sống.
          </p>
          <p className='mt-4'>
            Nếu bạn đang tìm kiếm một bộ đồ ăn hoàn hảo làm tặng người thân, bạn bè hay muốn tạo bộ đồ ăn đẹp mắt
            cho gia đình mình, thì bộ đồ gốm sứ sẽ là một sự lựa chọn tuyệt vời để thể hiện tình cảm của bạn đến
            những người thân yêu của mình.
          </p>
        </div>
        <div ref={shoppingGuideEl} className='hidden'>
          <p className='mt-4'>Bước 1: Truy cập website và lựa chọn sản phẩm cần mua</p>
          <p className='mt-4'>
            Bước 2: Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau
          </p>
          <p className='mt-4'>
            Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng
          </p>
          <p className='mt-4'>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng</p>
          <p className='mt-4'>
            Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán
          </p>
          <p className='mt-4'>Bước 3: Lựa chọn thông tin tài khoản thanh toán</p>
          <p className='mt-4'>
            Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài
            khoản trên hệ thống
          </p>
          <p className='mt-4'>
            Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục
            đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình
          </p>
          <p className='mt-4'>
            Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản
          </p>
          <p className='mt-4'>
            Bước 4: Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho
            đơn hàng của mình
          </p>
          <p className='mt-4'>Bước 5: Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng</p>
          <p className='mt-4'>
            Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng
            và địa chỉ của bạn.
          </p>
          <p className='mt-4'>Trân trọng cảm ơn.</p>
        </div>
      </div>
    </div>
  );
}

export default DescProduct;
