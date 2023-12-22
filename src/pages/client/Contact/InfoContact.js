import { ClockIcon, MapIcon, MessageIcon, TelephoneIcon } from 'components/Icon/Icon';
import { Link } from 'react-router-dom';

function InfoContact() {
  return (
    <div className='grid grid-cols-2 gap-5 font-medium text-sm'>
      <div className='col-span-1 flex items-center'>
        <div className='mr-[10px] w-10 min-w-[40px] h-10 rounded-[50%] border-[1px] border-primary text-primary flex_center'>
          <MapIcon />
        </div>
        <div>
          <b className='block'>Địa chỉ:</b>
          <span>70 Lữ Gia, Phường 15, Quận 11, TP. HCM</span>
        </div>
      </div>

      <div className='col-span-1 flex items-center'>
        <div className='mr-[10px] w-10 min-w-[40px] h-10 rounded-[50%] border-[1px] border-primary text-primary flex_center'>
          <ClockIcon />
        </div>
        <div>
          <b className='block'>Thời gian làm việc:</b>
          <span>
            8h - 22h <br></br>Từ thứ 2 đến chủ nhật
          </span>
        </div>
      </div>

      <div className='col-span-1 flex items-center'>
        <div className='mr-[10px] w-10 min-w-[40px] h-10 rounded-[50%] border-[1px] border-primary text-primary flex_center'>
          <TelephoneIcon />
        </div>
        <div>
          <b className='block'>Hotline:</b>
          <Link className='cursor-pointer hover:text-primary transition'>1900 6750</Link>
        </div>
      </div>

      <div className='col-span-1 flex items-center'>
        <div className='mr-[10px] w-10 min-w-[40px] h-10 rounded-[50%] border-[1px] border-primary text-primary flex_center'>
          <MessageIcon />
        </div>
        <div>
          <b className='block'>Email:</b>
          <a
            href='https://mail.google.com/mail/u/0/#inbox'
            className='cursor-pointer hover:text-primary transition'>
            support@sapo.vn
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoContact;
