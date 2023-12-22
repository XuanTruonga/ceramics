/* eslint-disable jsx-a11y/alt-text */
import { ClockIcon } from "components/Icon/Icon";
import LayoutSection from "../../Layout/LayoutSection";
import { Link } from "react-router-dom";

const newsLatest = [
  {
    name: "Mẹo phát hiện ly cốc bát đĩa nhiễm độc và cách phòng tránh",
    img: "https://bizweb.dktcdn.net/100/485/241/articles/blog2.jpg?v=1685960411533",
  },
  {
    name: "Tinh hoa nghề gốm xưa và nay",
    img: "https://bizweb.dktcdn.net/100/485/241/articles/blog3.jpg?v=1685960815727",
  },
  {
    name: "Bí quyết bảo quản bộ ấm chén uống trà trông như mới",
    img: "https://bizweb.dktcdn.net/100/485/241/articles/blog1.jpg?v=1685959536597",
  },
];

function NewsLatest() {
  return (
    <LayoutSection>
      <div>
        <div className="text-center mb-6">
          <Link to='/tin-tuc' className="font-32 hover:text-primary transition">Tin tức mới nhất</Link>
          <p className="text-lg text-gray">
            Cập nhật những tin tức xu hướng mới nhất hiện nay.
          </p>
        </div>
        {/* newsLatest map*/}
        <div className="grid grid-cols-3 gap-9">
          {newsLatest.map((item, index) => {
            return (
              <div key={index} className="col-span-1">
                <div className="relative">
                 <Link to='/tin-tuc'> <img className="rounded" src={item.img}></img></Link>
                  <div className="absolute rounded-md bg-primary top-3 left-2 text-white flex_center p-[4px_8px] font-semibold">
                    <ClockIcon />
                    <span className="inline-block text-sm ml-1">Ngày 11/12/2023</span>
                  </div>
                </div>

                <div className="p-5">
                  <Link to='/tin-tuc' className="block font-18 mb-3 h-14 hover:text-primary ellipsis transition">
                    {item.name}
                  </Link>
                  <Link to="/tin-tuc" className="hover-input flex justify-center">
                    <span className="text-primary font-semibold inline-block relative hover:text-primaryLight transition">
                      Xem thêm
                      <span className="absolute rounded-lg h-[2px] left-0 bg-red bottom-0 animate-develop hover-output"></span>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <Link to='/tin-tuc' className="button-l transition">XEM TẤT CẢ</Link>
        </div>
      </div>
    </LayoutSection>
  );
}

export default NewsLatest;
