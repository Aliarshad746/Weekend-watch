import React from "react";

function Ratings({ color = "#f8e825", rating = 0 }) {
  let finalRating = +(rating / 2).toFixed(2);
  const ratingArray = new Array(5).fill("");
  return (
    <div className="rating">
      {ratingArray.map((_, index) => (
        <span key={index}>
          <i
            style={{ color }}
            className={
              finalRating >= index + 1
                ? "fas fa-star"
                : finalRating >= index + 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
    </div>
  );
}

export default Ratings;
