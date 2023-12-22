/* eslint-disable jsx-a11y/alt-text */
import { MapIcon, MessageIcon, TelephoneIcon } from "components/Icon/Icon";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#303030] relative overflow-hidden">
      <div
        className="bg-no-repeat w-[1200px] h-[1200px] bg-[length:1200px_1200px] bg-center absolute top-[-280px] 
         left-[50%] ml-[-600px] animate-[spin_60s_linear_infinite] opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "url(//bizweb.dktcdn.net/100/485/241/themes/911577/assets/trongdong.png?1688627722165)",
        }}
      ></div>

      <div className="grid grid-cols-10 gap-6 text-white p-12 font-medium text-sm">
        {/* thông tin */}
        <div className="col-span-3">
          <ul className="list-disc">
            <li className="mb-5 font-bold text-lg">THÔNG TIN</li>
            <li className="flex items-center gap-3 mb-3">
              <MapIcon />
              <span>70 Lữ Gia, Phường 15, Quận 11, TP. HCM</span>
            </li>
            <li className="flex items-center gap-3 mb-3">
              <TelephoneIcon />
              <Link to="/" className=" hover:text-primary transition">
                1900 6750
              </Link>
            </li>
            <li className="flex items-center gap-3 mb-3">
              <MessageIcon />
              <a href="https://www.sapo.vn/" className=" hover:text-primary transition">
                support@sapo.vn
              </a>
            </li>
            <li className="mb-5 font-bold text-lg">MẠNG XÃ HỘI</li>
            <li className="flex items-center gap-3 mb-5">
              <Link>
                <img
                  className="hover:opacity-80 transition"
                  width="32px"
                  src="//bizweb.dktcdn.net/100/485/241/themes/911577/assets/zalo.png?1700209535143"
                ></img>
              </Link>
              <Link>
                <img
                  className="hover:opacity-80 transition"
                  width="32px"
                  src="//bizweb.dktcdn.net/100/485/241/themes/911577/assets/facebook.png?1700209535143"
                ></img>
              </Link>
              <Link>
                <img
                  className="hover:opacity-80 transition"
                  width="32px"
                  src="//bizweb.dktcdn.net/100/485/241/themes/911577/assets/youtube.png?1700209535143"
                ></img>
              </Link>
              <Link>
                <img
                  className="hover:opacity-80 transition"
                  width="32px"
                  src="//bizweb.dktcdn.net/100/485/241/themes/911577/assets/google.png?1700209535143"
                ></img>
              </Link>
            </li>
          </ul>
        </div>

        {/* chính sách */}
        <div className="col-span-2">
          <ul className="list-disc">
            <li className="mb-5 font-bold text-lg">THÔNG TIN</li>
            <li className="flex items-center gap-3 mb-3 hover:text-primary transition">
              <Link>Chính sách bảo mật</Link>
            </li>
            <li className="flex items-center gap-3 mb-3 hover:text-primary transition">
              <Link>Chính sách đổi trả</Link>
            </li>
            <li className="flex items-center gap-3 mb-3 hover:text-primary transition">
              <Link>Chính sách đổi trả</Link>
            </li>
            <li className="flex items-center gap-3 mb-3 hover:text-primary transition">
              <Link>Quy định sử dụng</Link>
            </li>
          </ul>
        </div>

        {/* hướng dẫn */}
        <div className="col-span-2">
          <ul className="list-disc">
            <li className="mb-5 font-bold text-lg">HƯỚNG DẪN</li>
            <li className="flex items-center gap-3 mb-3 hover:text-primary transition">
              <Link>Chính sách bảo mật</Link>
            </li>
            <li className="flex items-center gap-3 mb-3 hover:text-primary transition">
              <Link>Chính sách đổi trả</Link>
            </li>
            <li className="flex items-center gap-3 mb-3 hover:text-primary transition">
              <Link>Chính sách đổi trả</Link>
            </li>
            <li className="flex items-center gap-3 mb-3 hover:text-primary transition">
              <Link>Quy định sử dụng</Link>
            </li>
          </ul>
        </div>

        {/* đăng ký nhận tin */}
        <div className="col-span-3">
          <ul className="list-disc">
            <li className="mb-5 font-bold text-lg">ĐĂNG KÝ NHẬN TIN</li>
            <li className="items-center gap-3 mb-3">
               <div className="mb-3"> Đăng ký ngay! Để nhận thật nhiều ưu đãi</div>
               <form className="mb-3  relative overflow-hidden">
                  <input className="p-2 rounded-l-md text-black outline-none" placeholder="nhập địa chỉ email của bạn"></input>
                  <button className="p-2 hover:bg-primaryLight rounded-r-md bg-primary">ĐĂNG KÝ</button>
                  <span className="block mt-2">Vui lòng nhập vào trường này</span>
               </form>
            </li>
            <li className="mb-5 font-bold text-lg">HÌNH THỨC THANH TOÁN</li>
            <li className="flex gap-2">
               <img width='60px' src="//bizweb.dktcdn.net/100/485/241/themes/911577/assets/payment_1.png?1700209535143"></img>
               <img width='60px' src="//bizweb.dktcdn.net/100/485/241/themes/911577/assets/payment_2.png?1700209535143"></img>
               <img width='60px' src="//bizweb.dktcdn.net/100/485/241/themes/911577/assets/payment_3.png?1700209535143"></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
