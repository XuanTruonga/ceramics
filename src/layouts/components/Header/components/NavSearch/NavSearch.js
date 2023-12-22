import { SearchIcon } from "components/Icon/Icon";

function NavSearch({onClick}) {
  return (
    <div className="nav_icon hover:text-primary transition" onClick={onClick}>
      <SearchIcon />
    </div>
  );
}

export default NavSearch;
