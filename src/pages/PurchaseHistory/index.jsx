import React, { useState, useEffect } from "react";
import "./style.scss";
import { Divider, Avatar, List, Tag, Modal } from "antd";

import { getOrders } from "../../api/order";
import { useSelector } from "react-redux";
import { filterProductById } from "../../utils/filterProduct";

export default function PurchaseHistory() {
  const [transactions, setTransactions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ordersDetail, setOrdersDetail] = useState([]);
  const product = useSelector((state) => state.product);

  const showModal = (item) => {
    setOrdersDetail(filterProductById(product, item));
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const checkStatus = (status) => {
    if (status === 3) {
      return <Tag color="blue">Pending</Tag>;
    } else if (status === 1) {
      return <Tag color="green">Approve</Tag>;
    } else if (status === 2) {
      return <Tag color="red">Decline</Tag>;
    }
  };

  useEffect(() => {
    getOrders().then((res) => {
      setTransactions(res.data.data);
    });
  }, []);

  return (
    <div className="page-purchase-history">
      <div className="container">
        <div className="wishlist-wrapper">
          <Divider />
          <h4>Purchase History</h4>
          <Divider />
          <ul className="wishlist-products">
            <List
              itemLayout="horizontal"
              dataSource={transactions}
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 6,
              }}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={
                      <>
                        ${item.amount} -----------------{" "}
                        {checkStatus(item.status)}
                        <button
                          className="btn"
                          onClick={() => showModal(item.order_details)}
                        >
                          View Detail
                        </button>
                        <Modal
                          title="Order Detail"
                          visible={isModalVisible}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        >
                          <h5>All products purchased:</h5>
                          {ordersDetail &&
                            ordersDetail.map((order) => {
                              return <li>{order.product_name}</li>;
                            })}
                          <p>
                            <strong>Total:</strong> {item.amount}
                          </p>
                        </Modal>
                      </>
                    }
                    description={`${item.created_at}`}
                  />
                </List.Item>
              )}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
