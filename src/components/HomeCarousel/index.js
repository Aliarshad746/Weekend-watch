import { useState } from "react";
import { getImagePath } from "../../utils/getImagePath";
import Searchbar from "../Searchbar";
import { useNavigate } from "react-router-dom";
import "./homeCarousel.css";

function HomeCarousel({ dataItems = [] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

/* 
  Logic to scroll multiple banners on button click
*/

  const handleMove = (btnType) => {
    if (btnType === "left") {
      setImageIndex((prev) => {
        if (+prev <= 0) return dataItems?.length - 1;

        return +prev - 1;
      });
    } else {
      setImageIndex((prev) => {
        if (+prev >= dataItems?.length - 1) return 0;

        return +prev + 1;
      });
    }
  };

  const callback = (search) => {
    navigate(`/search?q=${search}`)
  }

  return (
    <div className="carousel-container">
      <div className="carousel-img-container">
        {dataItems?.map((item) => (
          <img
            key={item?.id}
            src={getImagePath(item?.backdrop_path, "original")}
            className="img-carousel"
            alt="poster"
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>

      <button className="btn-carousel left" onClick={() => handleMove("left")}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button
        className="btn-carousel right"
        onClick={() => handleMove("right")}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      <div className="btn-carousel-dots">
        {dataItems?.map((_, index) => (
          <button className="btn-carousel-dot-single" key={index} onClick={() => setImageIndex(index)}>
            {index !== imageIndex ? <i className="fa-regular fa-circle"></i> : <i className="fa-solid fa-circle"></i>}
          </button>
        ))}
      </div>
      <div className="background-texts">
        <div className="header">Welcome to the weekend watch</div>
        <div className="sub-header">Millions of Movies, TV Shows and many more</div>
        <Searchbar placeholder="Search for movie, tv shows, and person" callback={callback}/>
      </div>
    </div>
  );
}

export default HomeCarousel;
