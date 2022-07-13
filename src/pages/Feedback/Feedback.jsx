import { Modal, Button, Form, Input, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import feedbackService from "../../api/feedback";

export default function Feedback({ isOpen, productId, productName, close }) {
  const [form] = Form.useForm();
  const [rating, setRating] = useState(-1);
  const [selectedStar, setSelectedStar] = useState(
    Array(5)
      .fill(0)
      .map((x) => ({ color: "black" }))
  );

  const handleRating = (value) => {
    setRating(value);
  };

  const onFinish = async (value) => {
    const result = await feedbackService.saveFeedback({
      ...value,
      rating: rating + 1,
      productId: productId,
    });

    const { data } = result;
    if (data.success) {
      message.success(data.message);
      close();
    } else {
      message.error(data.message);
    }
  };

  useEffect(() => {
    form.resetFields();
  }, []);

  useEffect(() => {
    setSelectedStar(
      selectedStar.map((x, index) => {
        if (index <= rating) x.color = "yellow";
        else x.color = "black";
        return x;
      })
    );
  }, [rating]);

  return (
    <Modal
      title={"Feedback Product: " + productName}
      visible={isOpen}
      onCancel={close}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Name"
          name="customer_name"
          rules={[
            {
              required: true,
              message: "You must input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="customer_email"
          rules={[
            {
              required: true,
              message: "You must input your email",
            },

            {
              pattern: "\\w+@\\w+(\\.\\w)+",
              message: "Your email is invalid!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Rating" name="rating">
          {Array(5)
            .fill(0)
            .map((x, index) => (
              <FontAwesomeIcon
                icon={faStar}
                style={selectedStar[index]}
                onClick={() => handleRating(index)}
              />
            ))}
        </Form.Item>

        <Form.Item
          label="Review Title"
          name="review_title"
          rules={[
            {
              required: true,
              message: "You must input title",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Review body"
          name="body_title"
          rules={[
            {
              required: true,
              message: "You must input title",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
