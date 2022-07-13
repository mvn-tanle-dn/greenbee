import { Divider } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { addWishList, getWishList } from "../../api/user";

// Style
import "./style.scss";

export default function WishList() {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const product = useSelector((state) => state.product);

  const filterProductByWishlist = (products, wishlistProducts) => {
    return products?.filter((product) => {
      return wishlistProducts?.find((wishlistProduct) => {
        return wishlistProduct.product_id === product.id;
      });
    });
  };

  const removeWishlistProduct = (productId) => {
    setWishlistProducts(
      wishlistProducts.filter((product) => product.id !== productId)
    );
    addWishList(productId).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getWishList().then((res) => {
      if (res.data.success) {
        setWishlistProducts(filterProductByWishlist(product, res.data.data));
      }
    });
  }, [product]);

  useEffect(() => {
    console.log(wishlistProducts);
  }, [wishlistProducts]);

  return (
    <div className="page-wishlist">
      <div className="container">
        <div className="wishlist-wrapper">
          <Divider />
          <h4>Wish List</h4>
          <Divider />
          <ul className="wishlist-products">
            {wishlistProducts &&
              wishlistProducts.map((_record) => {
                return (
                  <>
                    <Divider />
                    <li className="wishlist-product">
                      <div className="wishlist-product-main">
                        <img
                          className="wishlist-product-img"
                          src={`${process.env.REACT_APP_URL}${_record.image1}`}
                          alt={`wishlist-product-${_record.product_name}`}
                        />
                        <span>{_record.id}</span>
                      </div>
                      <span className="wishlist-product-price">
                        {product.sell_price}
                      </span>
                      <div className="wishlist-product-action">
                        <button
                          className="btn"
                          onClick={() => {
                            removeWishlistProduct(_record.id);
                          }}
                        >
                          Remove
                        </button>
                        <button className="btn">Add To Cart</button>
                      </div>
                    </li>
                  </>
                );
              })}

            {wishlistProducts.length < 1 && "Emty Product"}
          </ul>
        </div>
      </div>
    </div>
  );
}
