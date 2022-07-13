import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";

import { useDispatch, useSelector } from "react-redux";

import prodIcon1 from "../../assets/images/home/prodIcon1.png";
import Product from "../Product";

import { getProducts, getProductsByCategory } from "../../api/product";

// Style
import "./style.scss";

const allProductCategory = {
  id: 0,
  icon: prodIcon1,
  category_name: "All Products",
};

export default function NavCategories() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const [activeId, setActiveId] = useState("all-products");

  const category = useSelector((state) => state.category);

  const getCategories = useCallback(
    () => dispatch.category.getCategories(),
    [dispatch]
  );

  const getProductByCategory = (categoryId) => {
    getProductsByCategory(categoryId).then((res) => {
      setActiveId(categoryId);
      setProducts(res.data.data);
    });
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data.data);
    });
  }, []);

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
            <li
              className={`block-nav-item ml-30 ${
                activeId === "all-products" ? "active" : ""
              }`}
              onClick={() => {
                getProducts().then((res) => {
                  setProducts(res.data.data);
                  setActiveId("all-products");
                });
              }}
            >
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
                  className={`block-nav-item ml-30 ${
                    item.id === activeId ? "active" : ""
                  }`}
                  onClick={() => getProductByCategory(item.id)}
                >
                  <img src={item.icon} alt={item.category_name} />
                  <span className="mt-15">{item.category_name}</span>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="discover-products-wrapper">
          <ul className="discover-products">
            {products &&
              products.map((_product) => (
                <Product key={_product.id} product={_product} />
              ))}
            {products.length === 0 && (
              <li className="emty-product" key="emty-product">
                Emty Product
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
