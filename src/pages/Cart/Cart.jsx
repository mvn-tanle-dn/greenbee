import React, { useEffect, useState } from "react";
import { Col, Row, Table, Card, Progress } from "antd";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

// Style
import "./style.scss";
import TextArea from "antd/lib/input/TextArea";

const columns = [
  {
    title: "PRODUCT",
    dataIndex: "product_name",
    key: "product_name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "PRICE",
    dataIndex: "sell_price",
    key: "sell_price",
  },
  {
    title: "QTY",
    dataIndex: "qty",
    key: "qty",
    render: (_, record) => (
      <input min={0} type="number" defaultValue={record.qty} />
    ),
  },
  {
    title: "TOTAL",
    key: "",
    dataIndex: "",
    render: (_, record) => {
      return parseInt(record.qty) * parseInt(record.sell_price);
    },
  },
];

const FREE_SHIP_PRICE = 300000;

function Cart() {
  const navigate = useNavigate();
  const { quantity, products } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      products.reduce((product, nextProduct) => {
        return product + parseInt(nextProduct.sell_price) * nextProduct.qty;
      }, 0)
    );
  }, [products]);

  return (
    <div className="page-cart">
      <div className="container">
        <a href="/purchase-history">Purchase History</a>
        <div className="page-cart-wrapper">
          <h4 className="page-cart-title">SHOPPING CART</h4>
          <div className="page-cart-products">
            <Row>
              <Col span={14}>
                <Table
                  columns={columns}
                  dataSource={products}
                  pagination={false}
                />
              </Col>
              <Col span={9} offset={1}>
                <Card
                  title={
                    quantity > 0
                      ? `THERE ARE ${quantity} ITEMS IN YOUR CART`
                      : "Your Cart Is Currently Empty."
                  }
                >
                  <Row>
                    <Col span={7}>Total:</Col>
                    <Col span={17}>${totalPrice}</Col>
                  </Row>
                  <Progress
                    percent={Math.round((totalPrice * 100) / FREE_SHIP_PRICE)}
                  />
                  <p>
                    {FREE_SHIP_PRICE - totalPrice > 0
                      ? `SPEND $${
                          FREE_SHIP_PRICE - totalPrice
                        } FOR FREE SHIPPING`
                      : `CONGRATULATIONS! YOU'VE GOT FREE SHIPPING!
`}
                    <br />
                    <span>
                      Free shipping for any orders above ${FREE_SHIP_PRICE}
                    </span>
                  </p>
                  <h4>ADD A NOTE TO YOUR ORDER :</h4>
                  <TextArea autoSize={{ minRows: 2 }} />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <button
                  className="cart-checkout-btn"
                  onClick={() => {
                    navigate("/payment");
                  }}
                >
                  PROCEED TO CHECKOUT
                </button>
              </Col>
              <Col span={6} offset={2}>
                <button className="cart-shopping-btn">CONTINUE SHOPPING</button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
