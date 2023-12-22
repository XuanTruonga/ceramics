import { CartIcon } from "components/Icon/Icon";
import { Link } from "react-router-dom";
import ModeCart from "../PopperCart";
import { totalProductCart } from "components/ProductItem/HandleCart";

function NavCart() {
  return (
      <div className="nav_icon relative hover-input transition ">
        <Link to="/gio-hang">
          <CartIcon />
          <span
            className="absolute top-0 right-[-1px] w-4 h-4 rounded-[50%] flex_center text-xs
           bg-primary text-white"
          > 
           {totalProductCart()}
          </span>
        </Link>
        <ModeCart/>
      </div>
  );
}

export default NavCart;
