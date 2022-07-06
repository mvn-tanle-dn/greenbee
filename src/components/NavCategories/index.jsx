import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";

import { useDispatch, useSelector } from "react-redux";

import prodIcon1 from "../../assets/images/home/prodIcon1.png";

// Style
import "./style.scss";

const allProductCategory = {
  id: 0,
  icon: prodIcon1,
  category_name: "All Products",
};

export default function NavCategories() {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.category);

  const getCategories = useCallback(
    () => dispatch.category.getCategories(),
    [dispatch]
  );

  useLayoutEffect(() => {
    if (!category) {
      getCategories();
    }
  }, [category, getCategories]);
  return (
    <section className="section-nav-categories">
      <div className="container">
        <nav className="block-nav">
          <ul className="block-nav-menu">
            <li className="block-nav-item ml-30">
              <img
                src={allProductCategory.icon}
                alt={allProductCategory.category_name}
              />
              <span className="mt-15">{allProductCategory.category_name}</span>
            </li>
            {category?.map((item, index) => {
              return (
                <li
                  key={`products-title-${index}`}
                  className={`block-nav-item ml-30`}
                >
                  <img src={item.icon} alt={item.category_name} />
                  <span className="mt-15">{item.category_name}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
