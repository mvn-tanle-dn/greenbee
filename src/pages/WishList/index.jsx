import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addWishList, getWishList } from "../../api/user";

// Style
import "./style.scss";

export default function WishList() {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const product = useSelector((state) => state.product);

  const filterProductByWishlist = (products, wishlistProducts) => {
    return products.filter((product) => {
      return wishlistProducts.some((wishlistProduct) => {
        return wishlistProduct.id === product.id;
      });
    });
  };

  const removeWishlistProduct = (productId) => {
    addWishList(productId).then((res) => {
      console.log(productId);
      console.log(res);
    });
  };

  useEffect(() => {
    getWishList().then((res) => {
      setWishlistProducts(filterProductByWishlist(product, res.data.data));
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
              wishlistProducts.map((product) => (
                <>
                  <Divider />
                  <li className="wishlist-product">
                    <div className="wishlist-product-main">
                      <img
                        className="wishlist-product-img"
                        src={`${process.env.REACT_APP_URL}${product.image1}`}
                        alt={`wishlist-product-${product.product_name}`}
                      />
                      <span>{product.product_name}</span>
                    </div>
                    <span className="wishlist-product-price">
                      {product.sell_price}
                    </span>
                    <div className="wishlist-product-action">
                      <button
                        className="btn"
                        onClick={() => removeWishlistProduct(product.id)}
                      >
                        Remove
                      </button>
                      <button className="btn">Add To Cart</button>
                    </div>
                  </li>
                </>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
