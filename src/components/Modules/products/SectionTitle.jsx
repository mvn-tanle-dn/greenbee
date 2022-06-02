import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="section-top-title">
      <h2 className="section-title">{title.title}</h2>
      <p className="section-sub-title">{title.subTitle}</p>
    </div>
  );
}

export default SectionTitle;
