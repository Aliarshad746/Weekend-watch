import { getFormattedDate } from "../../utils/getFormattedDate";
import { getImagePath } from "../../utils/getImagePath";
import Ratings from "../Ratings";
import "./card.css";

function Card({ cardData = {} }) {
  const {
    poster_path = "",
    title = "",
    release_date = "",
    vote_average = 0,
    original_name = "",
    first_air_date = ""
  } = cardData || {};
  return (
    <div className="card-container">
      {poster_path ? <img
        src={getImagePath(poster_path, "original")}
        alt="poster"
        className="card-image"
      /> : <div className="card-image-div">No Preview Available</div> }  
      
      <div className="movie-name">{title || original_name}</div>
      <div className="release-date">{getFormattedDate(release_date || first_air_date)}</div>
      <Ratings rating={vote_average} />
    </div>
  );
}

export default Card;
