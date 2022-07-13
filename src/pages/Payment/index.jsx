import { Form, Input, Select, Row, Col, Divider, Button, message } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Api
import { postOrders, postOrdersWithVnPay } from "../../api/order";

// Style
import "./style.scss";

const Payment = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { quantity, products } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const onSubmitWithCash = () => {
    postOrders({
      ...form.getFieldsValue(),
      order_details: products.map((product) => {
        return {
          product_id: product.id,
          quantity: product.qty,
        };
      }),
    }).then((res) => {
      if (res.data.success) {
        message.success("Your payment was successful!");
        form.resetFields();
        navigate("/");
        dispatch.cart.resetCart();
      } else {
        message.error("Your payment failed please try again!");
      }
    });
  };

  const onSubmitWithVnPay = () => {
    postOrdersWithVnPay({
      ...form.getFieldsValue(),
      order_details: products.map((product) => {
        return {
          product_id: product.id,
          quantity: product.qty,
        };
      }),
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = res.data.data;
        form.resetFields();
        dispatch.cart.resetCart();
      } else {
        message.error("Your payment failed please try again!");
      }
    });
  };

  useEffect(() => {
    setTotalPrice(
      products.reduce((product, nextProduct) => {
        return product + parseInt(nextProduct.sell_price) * nextProduct.qty;
      }, 0)
    );
  }, [products]);

  return (
    <div className="page-payment">
      <div className="container">
        <Row>
          <Col span={8}>
            <Form form={form}>
              <Form.Item name="email">
                <Input type="email" placeholder="Email" />
              </Form.Item>
              <Form.Item name="shipping_country" initialValue="Viet Nam">
                <Select placeholder="Country/region">
                  <Select.Option value="Viet Nam">Viet Nam</Select.Option>
                  <Select.Option value="Japan">Japan</Select.Option>
                </Select>
              </Form.Item>
              <Row>
                <Col span={11}>
                  <Form.Item name="shipping_first_name">
                    <Input
                      title="firstname"
                      placeholder="First name (optional)"
                    />
                  </Form.Item>
                </Col>
                <Col span={11} offset={2}>
                  <Form.Item name="shipping_last_name">
                    <Input title="firstname" placeholder="Last name" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="shipping_address">
                <Input placeholder="Address" />
              </Form.Item>
              <Form.Item name="shipping_city">
                <Input placeholder="City" />
              </Form.Item>
              <Button onClick={onSubmitWithCash}>Pay with cash</Button>
              <Button onClick={onSubmitWithVnPay}>Pay with VNPay</Button>
            </Form>
          </Col>
          <Col span={12} offset={4}>
            <ul className="payment-products">
              {products &&
                products.map((product) => {
                  if (product.qty > 0) {
                    return (
                      <li className="payment-product">
                        <div className="payment-product-left">
                          <div className="payment-product-img-wrapper">
                            <img
                              src={`${process.env.REACT_APP_URL}${product.image1}`}
                              alt={`product-${product.id}`}
                            />
                            <span className="payment-product-qty">
                              {product.qty}
                            </span>
                          </div>
                          <span>{product.product_name}</span>
                        </div>
                        <div className="payment-product-right">
                          <span>
                            {parseInt(product.sell_price) *
                              parseInt(product.qty)}
                          </span>
                        </div>
                      </li>
                    );
                  }
                })}
            </ul>
            <Divider />
            <ul className="payment-total">
              <li>
                <span>Subtotal:</span>
                <span>${totalPrice}</span>
              </li>
              <li>
                <span>Shipping:</span>
                <span>{totalPrice >= 300 ? "Free" : "$20"}</span>
              </li>
              <Divider />
              <li>
                <span>Total:</span>
                <span>${totalPrice >= 300 ? totalPrice : totalPrice + 20}</span>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Payment;
