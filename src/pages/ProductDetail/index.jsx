import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Tabs, notification, Avatar, List, Divider } from "antd";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Style
import "./style.scss";
import { addWishList } from "../../api/user";
import { getProductComments } from "../../api/product";

const { TabPane } = Tabs;

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const product = useSelector((state) => state.product);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productComment, setProductComment] = useState([]);

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

  //  1  accept
  //  2 denied
  // 2

  const addToCart = (product) => {
    dispatch.cart.increment();
    dispatch.cart.addToCart(product);
  };

  const handleAddWishList = (product) => {
    addWishList(product.id).then((res) => {
      if (res.status === 200) {
        openNotification(product);
      }
    });
  };

  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    setCurrentProduct(product?.find((product) => product.id == id));
  }, [id, product]);

  useEffect(() => {
    if (id) {
      getProductComments(id).then((res) => {
        console.log(res);
        setProductComment(res.data.data);
      });
    }
  }, [id]);

  return (
    <div className="page-product-detail">
      <div className="container">
        {currentProduct && (
          <>
            <Row>
              <Col span={10}>
                <div className="product-detail-img">
                  <img
                    src={`${process.env.REACT_APP_URL}${currentProduct.image1}`}
                    alt="product-detail-img"
                  />
                </div>
              </Col>
              <Col span={13} offset={1}>
                <div className="product-detail-content">
                  <h4>{currentProduct.product_name}</h4>
                  <span>Price: 2000</span>
                  <Row>
                    <Col span={4}>SKU:</Col>
                    <Col span={5}>{currentProduct.sku}</Col>
                  </Row>
                  <Row>
                    <Col span={4}>Category:</Col>
                    <Col span={5}>
                      {currentProduct?.category?.category_name}
                    </Col>
                  </Row>
                  <Row>
                    <p>{currentProduct.short_description}</p>
                  </Row>
                  <Row>
                    <Col span={4}>Quantity:</Col>
                    <Col span={5}>
                      <input type="number" defaultValue="1" />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <button
                        className="btn"
                        onClick={() => handleAddWishList(currentProduct)}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart(currentProduct)}
                      >
                        Add To Cart
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="DESCRIPTION" key="1">
                  {currentProduct.description}
                </TabPane>
                <TabPane tab="REVIEWS" key="2">
                  <ul className="comments">
                    {productComment &&
                      productComment?.map((comment) => (
                        <>
                          <li className="comment">
                            <h4>{comment.customer_name}</h4>
                            <div className="comment-content">
                              <h5>{comment.review_title}</h5>
                              <p>{comment.body_title}</p>
                            </div>
                          </li>
                          <Divider />
                        </>
                      ))}
                  </ul>
                </TabPane>
              </Tabs>
            </Row>
          </>
        )}
      </div>
    </div>
  );
}
export default ProductDetail;
