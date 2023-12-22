/* eslint-disable jsx-a11y/alt-text */
import images from "acssets/imgs/imgs";
import { Link } from "react-router-dom";



function PopperCategory() {
  return (
    <div className="animate-slide-top hover-output w-[1100px] max-h-[600px] right-[-410%] bg-white rounded-b-md p-4 cursor-default shadow-md">
      <div className=" grid grid-cols-9 gap-6 w-full h-full leading-5 font-medium">
        {/* phòng ăn */}
        <div className="col-span-2 p-2">
          <Link to="/" className="mb-3 block hover:text-primaryLight font-semibold">Phòng ăn</Link>
          <div className="text-grayDark">
            <Link to="/" className="category-product-name">Tô-Chén-Dĩa</Link>
            <Link to="/" className="category-product-name">Thố - Khay</Link>
            <Link to="/" className="category-product-name">Ca - Ly</Link>
          </div>
        </div>
        {/* trà cà phê */}
        <div className="col-span-2 p-2">
          <Link to="/" className="mb-3 block hover:text-primaryLight font-semibold">Phòng ăn</Link>
          <div className="text-grayDark">
            <Link to="/" className="category-product-name">Bộ Trà</Link>
            <Link to="/" className="category-product-name">Cà phê</Link>
            <Link to="/" className="category-product-name">Phụ kiện trà - cà phê</Link>
            <Link to="/" className="category-product-name">Phụ kiện - cà phê</Link>
          </div>
        </div>
        {/* nồi sứ dưỡng sinh */}
        <div className="col-span-2 p-2">
          <Link to="/" className="mb-3 block hover:text-primaryLight font-semibold">Phòng ăn</Link>
          <div className="text-grayDark">
            <Link to="/" className="category-product-name">Luna</Link>
            <Link to="/" className="category-product-name">Vesta</Link>
            <Link to="/" className="category-product-name">Ấm - Chảo</Link>
          </div>
        </div>
        {/* img category popper */}
        <div className="col-span-3 p-2 row-span-2">   
         <img src={images.popperCategoryImg} alt="ảnh gặp chút sự cố"></img>
        </div>
        {/* sứ dưỡng sinh */}
        <div className="col-span-2 p-2">
          <Link to="/" className="mb-3 block hover:text-primaryLight font-semibold">Phòng ăn</Link>
          <div className="text-grayDark">
            <Link to="/" className="category-product-name">Ly sứ dưỡng sinh</Link>
            <Link to="/" className="category-product-name">Hộp sứ dưỡng sinh</Link>
            <Link to="/" className="category-product-name">Đũa sứ</Link>
          </div>
        </div>
        {/* phụ kiện bàn */}
        <div className="col-span-2 p-2">
          <Link to="/" className="mb-3 block hover:text-primaryLight font-semibold">Phòng ăn</Link>
          <div className="text-grayDark">
            <Link to="/" className="category-product-name">Muỗng - Đũa</Link>
            <Link to="/" className="category-product-name">Túi vải canvas</Link>
            <Link to="/" className="category-product-name">Gác đũa sứ</Link>
            <Link to="/" className="category-product-name">Phụ kiện khác</Link>
          </div>
        </div>
        {/* sú nghệ thuật */}
        <div className="col-span-2 p-2">
          <Link to="/" className="mb-3 block hover:text-primaryLight font-semibold">Phòng ăn</Link>
          <div className="text-grayDark">
            <Link to="/" className="category-product-name">Tượng Linh Vật</Link>
            <Link to="/" className="category-product-name">Tượng trang trí</Link>
            <Link to="/" className="category-product-name">Bình Hoa</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopperCategory;
