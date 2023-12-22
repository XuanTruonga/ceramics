/* eslint-disable jsx-a11y/alt-text */
import {  SearchIcon } from "components/Icon/Icon";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Ca thấp quai tròn 0.35 L - Jasmine - Trắng",
    price: "93.500đ",
  },
  {
    name: "Ca thon quai số 7 0.33 L - Jasmine - Trắng",
    price: "79.200₫",
  },
  {
    name: "Ca thấp quai tròn 0.35 L - Jasmine - Trắng",
    price: "93.500đ",
  },
  {
    name: "Ca bia 0.36 L - Jasmine - Trắng",
    price: "75.900₫",
  },
  {
    name: "Ca thấp quai tròn 0.35 L - Jasmine",
    price: "93.500đ",
  },
];

function ProductSearchDefault() {
  return (
    <div className="">
      {/* header */}
      <div>
        <div className="border overflow-hidden rounded-md text-sm flex">
          <input
            className="flex-1 outline-none p-[12px]"
            placeholder="Nhập tên sản phẩm..."
          ></input>
          <span className=" flex_center px-[12px] border-l-[1px] border-[#ccc] hover:bg-slate-100 cursor-pointer">
            {" "}
            <SearchIcon />
          </span>
        </div>
      </div>
      {/* body */}
      <div className="mt-5 font-bold">
        <div className="mb-5 text-xl ">Sản phẩm được tìm nhiều nhất</div>
        <div className="">
          {/* map product */}
          {products.map((product,index) => {
            return (
              <div key={index} className="mb-4 flex">
                <Link className="w-[90px] h-[90px] bg-[#ffc444] flex_center rounded">
                  <img src="//bizweb.dktcdn.net/thumb/large/100/485/241/products/a001-153502000-1-e977ee61556d496.png?v=1685369389640"></img>
                </Link>
                <div className="px-2 flex-1">
                  <Link className="block mb-[10px]">
                    {product.name}
                  </Link>
                  <div className="text-red text-sm font-extrabold">{product.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductSearchDefault;
