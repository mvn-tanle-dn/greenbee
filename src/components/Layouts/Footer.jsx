import React from "react";
import { footerData } from "./footerData";
import footerPay from "../../assets/images/footer-pay.png";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer">
        <div className="container">
          <div className="footer-form">
            <div className="footer-form-title col-6">
              <i className="icon-news"></i>
              Sign Up For Newsletters
            </div>
            <div className="footer-form-left col-6">
              <div className="btn-group mr-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="inp-form-footer"
                />
              </div>
              <button type="submit" className="btn-submit-footer mr-20">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="distance">
          <div className="footer-top">
            <div className="container">
              <ul className="footer-top-list">
                {footerData.map((item, index) => {
                  return (
                    <li
                      className="footer-top-item col-small-12 col-medium-4 col-large-3"
                      key={`products-top-block-${index}`}
                    >
                      <h3 className="block-title">{item.title}</h3>
                      <ul className="footer-block-content">
                        {item.content.map((subItem, index) => {
                          return (
                            <li
                              className="footer-block-item pt-10 pb-10"
                              key={`footer-block-item-${index}`}
                            >
                              {subItem.icon ? (
                                <span className="mr-10">{subItem.icon}</span>
                              ) : (
                                ""
                              )}
                              {subItem.text}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer-bottom pt-20 pb-20">
            <div className="container">
              <ul className="footer-bottom-list">
                <li className="footer-bottom-left col-medium-12 col-large-6">
                  Copyright © 2020 Vinovathemes. All rights reserved.
                </li>
                <li className="footer-bottom-right col-medium-12 col-large-6">
                  <img src={footerPay} alt="footer-pay" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
