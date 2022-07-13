import React, { useEffect, useLayoutEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

// Images
import userInfoImg from "../../assets/images/user-info.jpeg";

// Icons
import { MdKeyboardBackspace } from "react-icons/md";

// Styles
import "./style.scss";
import { updateProfile } from "../../api/user";

export default function UserInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const profile = useSelector((state) => state.profile);

  const getProfile = useCallback(
    () => dispatch.profile.getProfile(),
    [dispatch]
  );

  const handleUpdateProfile = () => {
    updateProfile(form.getFieldsValue()).then((res) => {
      if (res.status === 200) {
        message.success("Your profile has been successfully.");
        form.setFieldsValue({
          current_password: null,
          password: null,
          new_password_confirmation: null,
        });
      }
    });
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useLayoutEffect(() => {
    form.setFieldsValue({
      first_name: profile.first_name,
      last_name: profile.last_name,
      email: profile.email,
    });
  }, [profile, form]);

  return (
    <div className="page-user-info">
      <div className="container">
        <div className="page-user-info-header">
          <p
            className="material-icon user-info-back-btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            <MdKeyboardBackspace />
          </p>
          <h3>My Profile</h3>
        </div>

        {profile && (
          <div className="user-info-content">
            <div className="user-info-title">
              <img
                className="user-info-avt"
                src={userInfoImg}
                alt="avt-profile"
              />
              <h3 className="user-info-name">
                {profile.first_name} {profile.last_name}
              </h3>
            </div>
            <div className="user-info-main">
              <Form
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                form={form}
              >
                <Form.Item label="First Name" name="first_name">
                  <Input />
                </Form.Item>
                <Form.Item label="Last Name" name="last_name">
                  <Input />
                </Form.Item>

                <Form.Item label="Email" name="email">
                  <Input type="email" disabled />
                </Form.Item>
                <Form.Item
                  name="current_password"
                  label="Current Password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your current password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="New Password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your new password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="new_password_confirmation"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your new password!",
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
                <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
                  <button
                    className="btn btn-primary user-info-update-btn"
                    onClick={() => handleUpdateProfile()}
                  >
                    Update
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
