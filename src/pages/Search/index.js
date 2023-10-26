import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card";
import Searchbar from "../../components/Searchbar";
import useFetchSearchData from "../../hooks/useFetchSearchData";
import "./search.css";

function Search() {
  const [searchParams] = useSearchParams();
  const { data: searchData = [], fetchSearchData } = useFetchSearchData({
    searchQuery: searchParams.get("q"),
  });

  const callback = (searchValue) => {
    fetchSearchData(searchValue);
  };

  return (
    <div>
      <div className="top-search-container">
        <Searchbar searchQuery={searchParams.get("q")} callback={callback} />
      </div>
      {searchData?.length ? (
        <div className="search-list-heading">Search Results</div>
      ) : (
        <div className="search-list-heading">No Results</div>
      )}
      <div className="movies-list">
        {searchData?.map((item) => (
          <Card key={item?.id} cardData={item} />
        ))}
      </div>
    </div>
  );
}

export default Search;
