import { HeartIcon } from "components/Icon/Icon";
import { localStorageHeartProducts } from "components/localStorage/localStorage";
import { Link } from "react-router-dom";

function NavHeart() {
  const totalProductHeart = localStorageHeartProducts()
  return (
    <Link to="/san-pham-yeu-thich" className="nav_icon relative transition">
      <HeartIcon />
      <span
        className="absolute top-0 right-[-3px] w-4 h-4 rounded-[50%] flex_center text-xs
       bg-primary text-white"
      >
        {totalProductHeart.length}
      </span>
    </Link>
  );
}

export default NavHeart;
