import React, { useState } from "react";
import { Form, Input } from "antd";

// Assets
import "./style.scss";
import LoginLogo from "../../assets/images/Login/login-logo-2.jpeg";
import Sticker from "../../assets/images/Login/woman-shopping.png";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your password!",
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
            <button className="register-btn btn">Register</button>
          </Form.Item>
        </Form>
      </div>
      <img className="login-page-sticker" src={Sticker} alt="login-sticker" />
    </div>
  );
};

export default Login;
