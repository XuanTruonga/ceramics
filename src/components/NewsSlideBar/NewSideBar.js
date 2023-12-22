/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
const cates = [
  "Phòng ăn",
  "Trà - cà phê",
  "Nồi sứ - dưỡng sinh",
  "Sứ dưỡng sinh",
  "Phụ kiện - bàn ăn",
  "Sứ nghệ thuật",
];
const oustandings = [
  {
    img: "https://bizweb.dktcdn.net/100/485/241/articles/blog2.jpg?v=1685960411533",
    title: "Mẹo phát hiện ly cốc bát đĩa nhiễm độc và cách phòng",
  },
  {
    img: "https://bizweb.dktcdn.net/100/485/241/articles/blog3.jpg?v=1685960815727",
    title: "Tinh hoa nghề gốm xưa và nay",
  },
  {
    img: "https://bizweb.dktcdn.net/100/485/241/articles/blog1.jpg?v=1685959536597",
    title: "Bí quyết bảo quản bộ ấm chén uống trà trông như mới",
  },
  {
    img: "https://bizweb.dktcdn.net/100/485/241/articles/untitled-2-78569c99-6c36-4f83-aa4f-8f56f2fc98a7.png?v=1686381509860",
    title: "Cách bảo quản đồ gốm sứ đúng cách tại nhà",
  },
  {
    img: "https://bizweb.dktcdn.net/100/485/241/articles/untitled-2-9fae433b-702b-488b-8238-67daf692d02c.png?v=1686380575807",
    title: "Nồi sứ dưỡng sinh – cuộc cách mạng từ chiếc nồi đất",
  },
];
function NewSideBar() {
  return (
    <div>
      {/* cate */}
      <div className="">
        <div className="font-bold text-[23px]">DANH MỤC</div>
        <ul className="mt-5">
          {cates.map((cate, index) => {
            return (
              <li key={index} className="flex items-center">
                <div className="h-2 w-2 rounded-[50%] bg-primary relative ">
                  <span className="w-full h-full bg-red rounded-[50%] absolute animate-ping"></span>
                </div>
                <Link to='/san-pham' className="ml-4 font-semibold p-2 hover:text-primary transition">
                  {cate}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* outstanding news*/}
      <div className="mt-6">
        <Link to="/tin-tuc" className="font-bold text-[23px] hover:text-primary transition">
          TIN TỨC NỔI BẬT
        </Link>
        <div className="mt-4 pr-3">
          {oustandings.map((item, index) => {
            return (
              <Link to="/tin-tuc" className="mb-5 flex" key={index}>
                <img
                  src={item.img}
                  className="mr-2 rounded-xl"
                  width="120px"
                  height="80px"
                ></img>
                <p className="font-medium hover:text-primary transition">
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewSideBar;
