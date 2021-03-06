import React, { useEffect, useState } from "react";
import { Form, Input, Col, Drawer, Row, Space, message } from "antd";

// Assets
import "./style.scss";
import LoginLogo from "../../assets/images/Login/login-logo-2.jpeg";
import Sticker from "../../assets/images/Login/woman-shopping.png";

// API
import { login, signup } from "../../api/auth";
import { KEY_LOCAL_STORAGE } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const access_token = localStorage.getItem(KEY_LOCAL_STORAGE.ACCESS_TOKEN);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    login({ email: values.email, password: values.password })
      .then((res) => {
        if (res.data.access_token) {
          if (res.data.role === "1") {
            localStorage.setItem(
              KEY_LOCAL_STORAGE.ACCESS_TOKEN,
              res.data.access_token
            );
            navigate("/");
            message.success("You are successfully logged in");
          } else {
            message.error("This is the account of the admin role");
          }
        }
      })
      .catch((err) => {
        message.error(err.response.data.error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onSignup = (values) => {
    signup({ ...values })
      .then((res) => {
        if (res.status === 200) {
          message.success("Register Success!");
          setVisible(false);
          return;
        }
      })
      .catch((err) => {
        message.error(err.response.data.errors.email[0]);
        return;
      });
  };

  useEffect(() => {
    if (access_token) {
      navigate("/");
    }
  }, [access_token, navigate]);

  return (
    <div className="login-page">
      <div className="login-page-left">
        <img src={LoginLogo} alt="login-logo" />
        <div className="login-page-desc">
          <p className="login-page-text anim-typewriter">
            Be smart, eat smart.
          </p>
        </div>
      </div>
      <div className="login-page-right">
        <Form
          name="form-login"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <button className="btn btn-primary" htmlType="submit">
              Login
            </button>

            <button className="register-btn btn" onClick={showDrawer}>
              Register
            </button>
          </Form.Item>
        </Form>
      </div>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form
          name="form-register"
          layout="vertical"
          hideRequiredMark
          onFinish={onSignup}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="first_name"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your first name",
                  },
                ]}
              >
                <Input placeholder="Please enter your first name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="last_name"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your last name",
                  },
                ]}
              >
                <Input placeholder="Please enter your last name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter your email",
                  },
                ]}
              >
                <Input placeholder="Please enter your email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password_confirmation"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <Space>
                  <button className="btn btn-primary" htmlType="submit">
                    Register
                  </button>
                  <button className="btn" onClick={onClose}>
                    Cancel
                  </button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
      <img className="login-page-sticker" src={Sticker} alt="login-sticker" />
    </div>
  );
};

export default Login;
