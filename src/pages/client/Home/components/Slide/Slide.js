/* eslint-disable jsx-a11y/alt-text */
import images from "acssets/imgs/imgs";
import { Link } from "react-router-dom";

function Slide() {
  return (
    <div className="w-full relative overflow-hidden">
      <img src={images.slideImg} className="w-full"></img>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-orange opacity-[0.15]"></div>
      {/* text-slide */}
      <div className="absolute left-0 right-0 top-[30%] text-white text-center">
          <h1 className="text-[60px] font-bold mb-10 ">BỘ SƯU TẬP</h1>
          <h1 className="font-Allura leading-5 text-[80px]">GỐM SỨ CAO CẤP</h1>
          <Link to='/san-pham' className="p-[8px_32px] rounded-[40px] font-bold inline-block bg-primaryLight mt-14 opacity-90 hover:opacity-[1] transition">
            KHÁM PHÁ NGAY
          </Link>
      </div>
    </div>
  );
}

export default Slide;
