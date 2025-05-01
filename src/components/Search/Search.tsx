import "index.css";
import { ImSearch } from "react-icons/im";

function Search() {
  return (
    <div className="searchBox">
      <input type="text" placeholder="Search" />
      <ImSearch className="searchIcon" />
    </div>
  );
}

export default Search;
