import { useState } from "react";
import "./searchbar.css";

function Searchbar({
  placeholder = "Search for movie, tv shows",
  searchQuery = "",
  callback = () => {},
}) {
  const [searchValue, setSearchValue] = useState(searchQuery);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return;
    }
    callback(searchValue);
  };
  return (
    <form onSubmit={submitHandler} className="form-container">
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Searchbar;
