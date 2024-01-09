import "./search.css";
import search from '../../assetes/search-normal.svg'
const Search = () => {
  return (
    <div className="search">
      <div className="search_box">
        <select name="" id="">
          <option>New/used</option>
          <option>user id</option>
          <option>user id</option>
          <option>user id</option>
        </select>
        <span>New/used</span>
      </div>
      <div className="search_box">
        <select name="" id="">
          <option>Marke</option>         
        </select>
        <span>INFINITY</span>
      </div>
      <div className="search_box">
        <select name="" id="">
          <option>Model</option>
          <option>user id</option>
          <option>user id</option>
          <option>user id</option>
        </select>
        <span>All models</span>
      </div>
     <div className="btn_search">
     <img src={search} alt=""/>
     </div>
    </div>
  );
};

export default Search;
