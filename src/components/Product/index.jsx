import React, { useState } from "react";

import { Col, InputNumber, Modal, Row, notification } from "antd";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// Style
import "./style.scss";
import { useSelector } from "react-redux";
import { addWishList, getWishList } from "../../api/user";

export default function Product({ product }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const { quantity, products } = useSelector((state) => state.cart);
  const category = useSelector((state) => state.category);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const openNotification = (product) => {
    notification.open({
      description: (
        <p className="noti-product-message">
          <span className="noti-product-name">{product.product_name}</span> has
          been added to your wishlist`
        </p>
      ),
      placement: "bottomRight",
      duration: 3,
      bottom: 50,
    });
  };

  const handleAddWishList = (product) => {
    addWishList(product.id).then((res) => {
      console.log(product.id);
      if (res.status === 200) {
        openNotification(product);
      }
    });
    getWishList().then((res) => {
      console.log(res);
    });
  };

  const viewProduct = (product) => {
    console.log(product);
    setCurrentProduct(product);
    setIsModalVisible(true);
  };

  const addToCart = (productId) => {
    // console.log(quantity, products);
  };

  return (
    <>
      <li className="product">
        <div className="product-img">
          <img
            src={`${process.env.REACT_APP_URL}${product.image1}`}
            alt="product-img"
          />
        </div>
        <div className="product-content">
          <h5 className="product-content-name">{product.product_name}</h5>
          <span className="product-content-price">{product.sell_price}</span>
          <div className="product-content-action">
            <FontAwesomeIcon
              icon={faCartArrowDown}
              onClick={() => {
                addToCart(product.id);
              }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => {
                handleAddWishList(product);
              }}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => viewProduct(product)}
            />
          </div>
        </div>
      </li>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        centered
        className="modal-product"
        width={1000}
      >
        <div className="modal-product-wrapper">
          <img
            className="modal-product-img"
            src={`${process.env.REACT_APP_URL}${product.image1}`}
            alt={currentProduct.product_name}
          />
          <div className="modal-product-content">
            <h4 className="modal-product-name">
              {currentProduct.product_name}
            </h4>
            <span className="modal-product-price">
              {currentProduct.sell_price}
            </span>
            <Row>
              <Col span={4}>SKU:</Col>
              <Col span={5}>{currentProduct.sku}</Col>
            </Row>
            <Row>
              <Col span={4}>Category:</Col>
              <Col span={5}>{currentProduct?.category?.category_name}</Col>
            </Row>
            <Row>
              <p>{currentProduct.description}</p>
            </Row>
            <Row>
              <Col span={4}>Quantity:</Col>
              <Col span={5}>
                <InputNumber min={0} defaultValue={1} />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <span></span>
                <p>
                  <FontAwesomeIcon icon={faHeart} />
                  Add To Wishlist
                </p>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <button className="btn btn-primary">Add To Cart</button>
              </Col>
            </Row>
          </div>
        </div>
      </Modal>
    </>
  );
}
