import React, { useState } from "react";

import prodIcon1 from "../../../assets/images/home/prodIcon1.png";
import prodIcon2 from "../../../assets/images/home/prodIcon2.png";
import prodIcon3 from "../../../assets/images/home/prodIcon3.png";
import prodIcon4 from "../../../assets/images/home/prodIcon4.png";
import prodIcon5 from "../../../assets/images/home/prodIcon5.png";
import prodIcon6 from "../../../assets/images/home/prodIcon6.png";

import { ourProducts } from "./data";
import ProductItem from "./ProductItem";
import SectionTitle from "./SectionTitle";

function Products() {
  const productsTitle = [
    { stt: 1, icon: prodIcon1, title: "All Products" },
    { stt: 2, icon: prodIcon2, title: "Vegetables" },
    { stt: 3, icon: prodIcon3, title: "Fruits" },
    { stt: 4, icon: prodIcon4, title: "Bread" },
    { stt: 5, icon: prodIcon5, title: "Juice" },
    { stt: 6, icon: prodIcon6, title: "Tea" },
  ];

  const [prodTitleActive, setProdTitleActive] = useState();

  const prodTitle = {
    title: "Discover Our Products",
    subTitle:
      "At vero eos et accusamus et iusto odio dignissimos ducimus quiƒblanditiis praesentium",
  };

  return (
    <section className="section-products">
      <div className="container">
        <SectionTitle title={prodTitle} />
        <nav className="block-nav">
          <ul className="block-nav-menu">
            {productsTitle.map((item, index) => {
              return (
                <li
                  key={`products-title-${index}`}
                  className={`block-nav-item ml-30 ${
                    prodTitleActive === index ? "active" : ""
                  }`}
                  onClick={() =>
                    setProdTitleActive(
                      productsTitle.findIndex((e) => e.stt === index + 1)
                    )
                  }
                >
                  <img src={item.icon} alt={item.title} />
                  <span className="mt-15">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="section-products-blog">
          <div className="section-products-tab-content active">
            <ul className="section-products-list">
              <ProductItem
                ourProducts={ourProducts}
                c
                star="true"
                colClass="col-small-12 col-medium-12 col-large-4"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
