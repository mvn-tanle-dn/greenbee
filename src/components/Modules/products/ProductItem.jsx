import React from "react";
import StarList from "../stars";

import { RiShoppingBagFill, RiHeartLine, RiSearchLine } from "react-icons/ri";
import CountDownSale from "./CountDownSale";

function ProductItem({ products, star, colClass }) {
  return (
    <>
      {products &&
        products.map((product, index) => {
          return (
            <li className={colClass} key={`our-prod-${index}`}>
              <div className="section-products-item">
                <div className="section-products-img col-6">
                  {/* {product.img.map((item, index) => (
                  <div
                    key={`section-products-img-${index}`}
                    className={`section-products-img-${index}`}
                  >
                    <img src={item} alt={`ours-product-img-${index}`} />

                    <CountDownSale />
                  </div>
                ))} */}
                  <div className="new-prod btn-prod">New</div>
                  {/* {item.percentSale !== 0 && (
                  <div className="sale-prod btn-prod">{item.percentSale}%</div>
                )} */}
                </div>
                <div className="section-products-content col-6">
                  <div className="product-content-box">
                    <h3 className="prod-title">{product.product_name}</h3>
                    {/* {star && <StarList star={product.reviews} colorStar="#d0d3ce" />} */}
                    <div className="prod-price">
                      {product.percentSale !== 0 ? (
                        <>
                          {/* <span className="prod-price-cost">
                          $
                          {Math.round(
                            (item.price * (100 - item.percentSale)) / 100
                          )}
                          ,00
                        </span> */}
                          <span
                            className="prod-price-sale ml-10"
                            style={{ textDecoration: "line-through" }}
                          >
                            ${product.sell_price}
                          </span>
                        </>
                      ) : (
                        <span className="prod-price-cost">
                          ${product.sell_price}
                        </span>
                      )}
                    </div>
                    {product.description ? (
                      <p className="mt-10 mb-10">{product.description}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <ul className="product-content-icon mt-30">
                    <li className="mr-5 addToCart-form">
                      <form className="formAddToCart">
                        <button>Select Option</button>
                      </form>
                    </li>
                    <li className="mr-5 addToCart-icon">
                      <button>
                        <RiShoppingBagFill />
                      </button>
                    </li>
                    <li className="mr-5">
                      <RiHeartLine />
                    </li>
                    <li>
                      <RiSearchLine />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
    </>
  );
}

export default ProductItem;
