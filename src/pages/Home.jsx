import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  AiOutlineComment,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai";

// Components
import ProductItem from "../components/Modules/products/ProductItem";
import Products from "../components/Modules/products/Products";
import SectionTitle from "../components/Modules/products/SectionTitle";
import {
  productsFlashDeal,
  ourProducts,
  latestPost,
  manufactureImg,
} from "../components/Modules/products/data";

// Assets
import bfMain from "../assets/images/home/bf-main.png";
import bestFood1 from "../assets/images/home/bf.png";
import bestFood2 from "../assets/images/home/bf2.png";
import bestFood3 from "../assets/images/home/bf3.png";
import bestFood4 from "../assets/images/home/bf4.png";
import policy1 from "../assets/images/home/policy1.webp";
import policy2 from "../assets/images/home/policy2.png";
import policy3 from "../assets/images/home/policy3.png";
import shopify1 from "../assets/images/home/shopify.webp";
import shopify2 from "../assets/images/home/shopify2.webp";
import shopify3 from "../assets/images/home/shopify3.webp";
import slide1 from "../assets/images/home/slide1.webp";
import slide2 from "../assets/images/home/slide2.webp";
import slide3 from "../assets/images/home/slide3.webp";
import imgGallery from "../assets/images/home/img-gellary.webp";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const settingDealBox = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const settingCollection = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const flashDealTitle = {
    title: "Flash Deal",
    subTitle:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  };

  return (
    <div className="page-home">
      <section className="section-slide-show mt-30">
        <div className="container">
          <ul className="section-slide-show-list">
            <Slider {...settings}>
              <li className="section-slide-show-item">
                <img src={slide1} alt="slide-1" />
              </li>
              <li className="section-slide-show-item">
                <img src={slide2} alt="slide-2" />
              </li>
              <li className="section-slide-show-item">
                <img src={slide3} alt="slide-3" />
              </li>
            </Slider>
          </ul>
        </div>
      </section>

      <section className="section-shopify mt-30 mb-30">
        <div className="container">
          <ul className="section-shopify-list">
            <li className="section-shopify-item mr-30">
              <Link to="shopify">
                <img src={shopify1} alt="shopify1" />
              </Link>
            </li>
            <li className="section-shopify-item mr-30">
              <Link to="shopify">
                <img src={shopify2} alt="shopify2" />
              </Link>
            </li>
            <li className="section-shopify-item">
              <Link to="shopify">
                <img src={shopify3} alt="shopify3" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-policy section-padding">
        <div className="container">
          <ul className="section-policy-list">
            <li className="section-policy-item mr-30">
              <div className="section-policy-icon col-4 mr-20">
                <img
                  className="section-policy-img"
                  src={policy1}
                  alt="policy1"
                />
              </div>
              <div className="section-policy-content col-8">
                <h3 className="block-title">cash on delivery</h3>
                <p className="block-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet tellus mauris
                </p>
              </div>
            </li>
            <li className="section-policy-item mr-30">
              <div className="section-policy-icon col-4 mr-20">
                <img
                  className="section-policy-img"
                  src={policy2}
                  alt="policy2"
                />
              </div>
              <div className="section-policy-content col-8">
                <h3 className="block-title">FREE SHIPPING</h3>
                <p className="block-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet tellus mauris
                </p>
              </div>
            </li>
            <li className="section-policy-item">
              <div className="section-policy-icon col-4 mr-20">
                <img
                  className="section-policy-img"
                  src={policy3}
                  alt="policy3"
                />
              </div>
              <div className="section-policy-content col-8">
                <h3 className="block-title">money back guarantee</h3>
                <p className="block-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet tellus mauris
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-best-food section-padding">
        <div className="container">
          <div className="section-top-title">
            <h2 className="section-title">We Grow Best Food</h2>
            <p className="section-sub-title">
              Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor
              incididunt
            </p>
          </div>

          <div className="section-bottom mt-30">
            <ul className="section-best-food-list">
              <li className="section-best-food-item col-3">
                <ul className="section-best-food-group section-best-food-group-left">
                  <li className="section-best-food-group-item mb-30">
                    <div className="section-best-food-img">
                      <img src={bestFood1} alt="best-food-1" />
                    </div>
                    <h3 className="block-title">Always Fresh</h3>
                    <p className="mt-15">
                      Maximus, purus quis tincidunt semper, felis tellus mole
                      stie nulla, in finibus erat magna et tortor phasellus a
                      magna lobortis
                    </p>
                  </li>
                  <li className="section-best-food-group-item mt-30">
                    <div className="section-best-food-img">
                      <img src={bestFood2} alt="best-food-2" />
                    </div>
                    <h3 className="block-title">Always Fresh</h3>
                    <p className="mt-15">
                      Maximus, purus quis tincidunt semper, felis tellus mole
                      stie nulla, in finibus erat magna et tortor phasellus a
                      magna lobortis
                    </p>
                  </li>
                </ul>
              </li>
              <li className="section-best-food-item col-6">
                <div className="section-best-food-img">
                  <img src={bfMain} alt="best-food-bg" />
                </div>
              </li>
              <li className="section-best-food-item col-3">
                <ul className="section-best-food-group section-best-food-group-right">
                  <li className="section-best-food-group-item mb-30">
                    <div className="section-best-food-img">
                      <img src={bestFood3} alt="best-food-3" />
                    </div>
                    <h3 className="block-title">Always Fresh</h3>
                    <p className="mt-15">
                      Maximus, purus quis tincidunt semper, felis tellus mole
                      stie nulla, in finibus erat magna et tortor phasellus a
                      magna lobortis
                    </p>
                  </li>
                  <li className="section-best-food-group-item mt-30">
                    <div className="section-best-foo-img">
                      <img src={bestFood4} alt="best-food-4" />
                    </div>
                    <h3 className="block-title">Always Fresh</h3>
                    <p className="mt-15">
                      Maximus, purus quis tincidunt semper, felis tellus mole
                      stie nulla, in finibus erat magna et tortor phasellus a
                      magna lobortis
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Products />

      <div className="distance">
        <section className="section-flash-deal section-padding">
          <div className="container">
            <SectionTitle title={flashDealTitle} />

            <div className="flash-deal-box">
              <Slider {...settingDealBox} className="slider-prod">
                {productsFlashDeal.map((item, index) => {
                  return (
                    <div key={`product-flash-deal-${index}`}>
                      <ul className="section-products-list">
                        <ProductItem
                          ourProducts={item}
                          star="true"
                          colClass="col-medium-12 col-large-6 "
                        />
                      </ul>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>
      </div>

      <section className="section-collection section-padding">
        <div className="container">
          <ul className="section-collection-tabs mb-30">
            <li className="section-collection-item mr-30">
              <Link className="section-collection-nav active" to="/">
                New Arrivals
              </Link>
            </li>
            <li className="section-collection-item mr-30">
              <Link className="section-collection-nav" to="/">
                Best Seller
              </Link>
            </li>
            <li className="section-collection-item">
              <Link className="section-collection-nav" to="/">
                Features
              </Link>
            </li>
          </ul>
          <div className="section-collection-list">
            <Slider {...settingCollection} className="slider-prod">
              <ul className="section-products-list">
                <ProductItem
                  ourProducts={ourProducts.slice(0, 5)}
                  star="true"
                  colClass="col-20 "
                />
              </ul>
              <ul className="section-products-list">
                <ProductItem
                  ourProducts={ourProducts.slice(6, 11)}
                  star="true"
                  colClass="col-20"
                />
              </ul>
            </Slider>
          </div>
        </div>
      </section>

      <section className="section-banner">
        <div className="container">
          <div className="section-banner-img">
            <Link to="/">
              <img src={imgGallery} alt="banner-gallery" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-latest-post section-padding">
        <div className="container">
          <ul className="latest-post-list">
            {latestPost.map((item, index) => {
              return (
                <li
                  className="latest-post-item col-4 mr-30"
                  key={`latest-post-${index}`}
                >
                  <a className="latest-post-img" href="/">
                    <img src={item.img} alt={item.title} />
                  </a>
                  <div className="latest-post-content">
                    <h3 className="block-title mb-10">{item.title}</h3>
                    <ul className="latest-post-acticle mb-10">
                      <li className="acticle-item mr-25">
                        <span className="acticle-icon">
                          <AiOutlineComment />
                        </span>
                        <span>{item.coment} comments</span>
                      </li>
                      <li className="acticle-item mr-25">
                        <span className="acticle-icon">
                          <AiOutlineUser />
                        </span>
                        <span>By {item.author}</span>
                      </li>
                      <li className="acticle-item">
                        <span className="acticle-icon">
                          <AiOutlineCalendar />
                        </span>
                        <span>{item.day}</span>
                      </li>
                    </ul>
                    <p className="latest-post-desc">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-manufacture">
        <div className="container">
          <ul className="manufacture-list">
            {manufactureImg.map((item, index) => {
              return (
                <li
                  className="manufacture-item"
                  key={`manufactureImg-${index}`}
                >
                  <img src={item} alt={`manufactureImg-${index}`} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
