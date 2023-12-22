/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

function CategoryItem({ size = "w-[160px] h-[160px]", data={}, children }) {
  return (
    <div className="w-[160px] py-5 text-center group font-16">
      <Link to="/san-pham">
        <div className={size}>
          <div className="rounded-[50%] h-full relative ">
            <img
              className="rounded-[50%] absolute top-0 img-category group-hover:top-[-12px] transition"
              src={data.img}
            ></img>
            <span className="category-img-bofore ">
            </span>
          </div>
        </div>
        <div className="mt-3 hover:text-primary transition">{data.name}</div>
        {children}
      </Link>
    </div>
  );
}

export default CategoryItem;
