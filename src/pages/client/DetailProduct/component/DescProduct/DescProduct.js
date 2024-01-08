import { useEffect, useRef, useState } from 'react';

const tabs = ['Mô tả sản phẩm', 'Hướng dẫn mua hàng'];

function DescProduct({ data }) {
  const [type, setType] = useState('Mô tả sản phẩm');
  const descProductEl = useRef();
  const shoppingGuideEl = useRef();
  useEffect(() => {
    if (type === 'Mô tả sản phẩm') {
      descProductEl.current.classList.remove('hidden');
      shoppingGuideEl.current.classList.add('hidden');
    }
    if (type === 'Hướng dẫn mua hàng') {
      descProductEl.current.classList.add('hidden');
      shoppingGuideEl.current.classList.remove('hidden');
    }
  }, [type]);
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
              onClick={(e) => setType(tab)}
              className='hover:border-b-[3px] hover:border-primary hover:text-primary
            cursor-pointer pb-2'>
              <span>{tab}</span>
            </span>
          );
        })}
      </div>

      <div className='font-medium text-sm'>
        <div ref={descProductEl}>
          <div className='dangerouslySetInnerHTML' dangerouslySetInnerHTML={{ __html: data?.description}} />
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
