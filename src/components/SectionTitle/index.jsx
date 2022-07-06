import React from "react";

function SectionTitle({ title, subTitle }) {
  return (
    <div className="section-top-title">
      <h2 className="section-title">{title}</h2>
      <p className="section-sub-title">{subTitle}</p>
    </div>
  );
}

export default SectionTitle;
