import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Tabs, notification, Divider } from "antd";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Feedback from "../Feedback/Feedback";

// Style
import "./style.scss";
import { addWishList } from "../../api/user";
import { getProductComments, getProductsByCategory } from "../../api/product";
import Product from "../../components/Product";

const { TabPane } = Tabs;

function CategoryDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);

  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});

  useEffect(() => {
    setCurrentCategory(category.find((record) => record.id === parseInt(id)));
    getProductsByCategory(parseInt(id)).then((res) => {
      console.log(res);
      setProducts(res.data.data);
    });
  }, [id, category]);

  useEffect(() => {
    console.log(currentCategory);
  }, [currentCategory]);

  return (
    <div className="page-category-detail">
      <div className="container">
        <div className="category-wrapper">
          <Divider />
          <h4>{currentCategory.category_name}</h4>
          <Divider />
          <ul className="category-products">
            {products &&
              products.map((_product) => <Product product={_product} />)}
            {products.length === 0 && "Emty Product"}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CategoryDetail;
