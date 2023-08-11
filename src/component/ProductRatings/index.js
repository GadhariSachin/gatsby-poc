import React from "react";

const ratingStyles = {
  display: "inline-block",
};

function ProductRating({ rating }) {
  const maxStars = 5;
  const filledStars = Math.min(Math.max(0, rating), maxStars);

  return (
    <div style={ratingStyles}>
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          style={{
            fontSize: "24px",
            color: `${index < filledStars ? "gold" : "gray"}`,
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default ProductRating;
