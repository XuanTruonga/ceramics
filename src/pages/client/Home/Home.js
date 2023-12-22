/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import CategoryImgs from "./components/CategoryImgs/CategoryImgs";
import Slide from "./components/Slide/Slide";
import DiscountProduct from "./components/DiscountProducts/DiscountProducts";
import OutstandingProducts from "./components/OutstandingProduct/OutstandingProduct";
import SetProductHot from "./components/SetProductHot/SetProductHot";
import GiftCompany from "./components/GiftCompany/GiftCompany";
import Artist from "./components/Artist/Artist";
import NewsLatest from "./components/NewsLatest/NewsLatest";
import Instagram from "./components/Instagram/Instagram";

function Home() {
  return (
    <div>
      <Slide />
      <CategoryImgs />
      {/* banner */}
      <div className="w-1180 mb-11">
        <Link to='/san-pham' className="m-3 w-[50%] overflow-hidden rounded-lg ">
          <img className="hover:scale-110 hover:rotate-[5deg] transition" src="//bizweb.dktcdn.net/100/485/241/themes/911577/assets/banner1.png?1700209535143"></img>
        </Link>
        <Link to='/san-pham' className="m-3 w-[50%] overflow-hidden rounded-lg">
          <img className="hover:scale-110 hover:rotate-[5deg] transition" src="//bizweb.dktcdn.net/100/485/241/themes/911577/assets/banner2.png?1700209535143"></img>
        </Link>
      </div>
      <DiscountProduct/>
      <OutstandingProducts/>
      <SetProductHot/>
      <GiftCompany/>
      {/* nghệ nhân */}
      <Artist/>
      {/* tin tuc */}
      <NewsLatest/>
      <Instagram/>
    </div>
  );
}

export default Home;
