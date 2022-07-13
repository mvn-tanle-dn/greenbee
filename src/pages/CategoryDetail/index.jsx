import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Divider } from "antd";

// Style
import "./style.scss";
import { getProductsByCategory } from "../../api/product";
import Product from "../../components/Product";

function CategoryDetail() {
  const { id } = useParams();

  const category = useSelector((state) => state.category);

  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});

  useEffect(() => {
    setCurrentCategory(category.find((record) => record.id === parseInt(id)));
    getProductsByCategory(parseInt(id)).then((res) => {
      setProducts(res.data.data);
    });
  }, [id, category]);

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
