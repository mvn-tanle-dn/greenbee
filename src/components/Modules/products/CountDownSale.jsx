import React from "react";

function CountDownSale() {
  return (
    <ul className="dropdown-sale">
      <li>
        <span className="time">115</span>
        <span className="unit">days</span>
      </li>
      <li>
        <span className="time">08</span>
        <span className="unit">hours</span>
      </li>
      <li>
        <span className="time">32</span>
        <span className="unit">minutes</span>
      </li>
      <li>
        <span className="time">07</span>
        <span className="unit">seconds</span>
      </li>
    </ul>
  );
}

export default CountDownSale;
