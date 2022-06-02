import React from "react";
import { AiFillStar } from "react-icons/ai";

function StarList({ star, colorStar }) {
  let rows = [];
  let starTemp = Math.round(star * 10) % 10;
  if (starTemp === 0) {
    for (let i = 0; i < star; i++) {
      rows.push(
        <i key={`star + ${i}`}>
          <AiFillStar className="star-icon " color={colorStar} />
        </i>
      );
    }
  } else if (starTemp < 5) {
    for (let i = 0; i < star - 1; i++) {
      rows.push(
        <i key={`star + ${i}`}>
          <AiFillStar className="star-icon " color={colorStar} />
        </i>
      );
    }
  } else {
    for (let i = 0; i < star - 1; i++) {
      rows.push(
        <i key={`star + ${i}`}>
          <AiFillStar className="star-icon " color={colorStar} />
        </i>
      );
    }
    rows.push(<i key={`haft-star`}></i>);
  }

  return <div className="star-list dis-flex mt-10 mb-10">{rows}</div>;
}

export default StarList;
