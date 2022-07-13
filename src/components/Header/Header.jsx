import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Api
import { logout } from "../../api/auth/index";

// Images
import logo from "../../assets/images/logo1.png";
import iconNav1 from "../../assets/images/icon-nav1.png";
import iconNav2 from "../../assets/images/icon-nav2.png";
import iconNav3 from "../../assets/images/icon-nav3.png";
import iconNav4 from "../../assets/images/icon-nav4.png";
import iconNav5 from "../../assets/images/icon-nav5.png";

// Icons
import {
  faArrowRightFromBracket,
  faUser,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FaSearch, FaAngleLeft } from "react-icons/fa";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

// Styles
import "./style.scss";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) => state.cart);
  const category = useSelector((state) => state.category);

  const getCategories = useCallback(
    () => dispatch.category.getCategories(),
    [dispatch]
  );

  const mainNav = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Products",
      path: "/products",
    },
    {
      display: "Purchase History",
      path: "/purchase-history",
    },
    {
      display: "Blog",
      path: "/blog",
    },
  ];

  const megamenu = [
    {
      icon: iconNav1,
      title: "Fresh Fruits",
      subTitle: "Apple, Orange, Watermelon, Banana Pineapple, Grapes...",
    },
    {
      icon: iconNav2,
      title: "Vegetables",
      subTitle: "Cabbage, Onion, Kale, Parsley Garlic, Asparagus...",
    },
    {
      icon: iconNav3,
      title: "Tea & Coffee",
      subTitle: "Leamon tea, Peach tea, Milk tea  Weight loss tea, Coffee ...",
    },
    {
      icon: iconNav4,
      title: "Fresh Juices",
      subTitle: "Apple, Orange, Watermelon, Banana Pineapple, Grapes...",
    },
    {
      icon: iconNav5,
      title: "Fesh Meats",
      subTitle: "Pork, Beef, Lamb chops, Salmon Chicken, Sausage...",
    },
  ];

  const [activeIconMenu, setActiveIconMenu] = useState("menu-icon");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);
  const categoriList = useRef(null);
  const menuLeft = useRef(null);
  const menuLeftCategoriList = useRef(null);

  const categoriesToggle = () => {
    categoriList.current.classList.toggle("active");
    const classList = categoriList.current.classList.value;
    const index = classList.search("active");
    if (index !== -1) {
      setActiveIconMenu("menu-icon");
    } else {
      setActiveIconMenu("menu-icon active");
    }
  };

  const menuLeftCategoriListToggle = () => {
    menuLeftCategoriList.current.classList.toggle("active");
  };

  const menuLeftTogle = () => {
    menuLeft.current.classList.toggle("active");
  };

  const handleLogout = () => {
    logout().then((res) => {
      if (res) {
        localStorage.removeItem("persist:root");
        localStorage.removeItem("access_token");
        message.success(res.data.message);
        navigate("/login");
      }
    });
  };

  useLayoutEffect(() => {
    if (!category) {
      getCategories();
    }
  }, [category, getCategories]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink", null);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="page-header">
      <div className="page-header-top" ref={headerRef}>
        <div className="container">
          <div className="header-top  pb-40 pt-40">
            <div className="header-logo col-3 col-medium-3 col-small-4">
              <BiMenuAltLeft
                className="menuLeft mr-10"
                onClick={menuLeftCategoriListToggle}
              />
              <ul className="menuLeft-menu" ref={menuLeftCategoriList}>
                <i className="menuLeft-menu-close">
                  <FaAngleLeft onClick={menuLeftCategoriListToggle} />
                </i>

                {category.map((item, index) => {
                  return (
                    <Link to={`/categories/${item.id}`}>
                      <li
                        className="menuLeft-menu-item"
                        key={`menuLeft-menu-${index}`}
                      >
                        <div className="icon-nav">
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className="group-title">
                          {item.name}
                          <p className="sub-title-nav">{item.description}</p>
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
              <Link to="/">
                <img src={logo} alt="logo-page" />
              </Link>
            </div>
            <form className="header-top-form col-9">
              <input
                className="header-top-form-input col-10"
                type="search"
                placeholder="ENTER YOUR KEYWORD"
              ></input>
              <button className="header-top-form-button col-2">
                <span>
                  <i className="seacrh-icon">
                    <FaSearch />
                  </i>
                </span>
              </button>
            </form>
            <nav className="header-top-nav col-9 col-medium-9 col-small-1">
              <BiMenu className="menu-mobile" onClick={menuLeftTogle} />
              <ul className="header-top-menu col-8" ref={menuLeft}>
                <i className="header-top-menu-close">
                  <IoClose onClick={menuLeftTogle} />
                </i>
                {mainNav.map((item, index) => {
                  return (
                    <li
                      className={`header-top-menu-item ${
                        activeNav === index ? "active" : ""
                      }`}
                      key={`header-menu-${index}`}
                    >
                      <Link to={item.path}>
                        <span>{item.display}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="header-top-socials col-4">
                <Link to="/cart">
                  <li className="material-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {quantity > 0 && (
                      <span className="header-top-socials-quantity">
                        {quantity}
                      </span>
                    )}
                  </li>
                </Link>
                <Link to="/wishlist">
                  <li className="material-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </li>
                </Link>
                <Link to="/user-info">
                  <li className="material-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </li>
                </Link>
                <li className="material-icon" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-bottom-row">
            <div className="vertical-menu col-3">
              <div className="vertical-dropdown">
                <div
                  className="vertical-dropdown-title"
                  onClick={categoriesToggle}
                >
                  <i className="zmdi zmdi-menu">
                    <BiMenu className={activeIconMenu} />
                    <IoClose className={activeIconMenu} />
                  </i>
                  <span className="ml-30">Categories</span>
                </div>
              </div>
              <ul className="header-bottom-menu col-3" ref={categoriList}>
                {category.map((item, index) => {
                  return (
                    <Link to={`/categories/${item.id}`}>
                      <li
                        className="header-bottom-menu-item"
                        key={`mega-menu-${index}`}
                      >
                        <div className="icon-nav">
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className="group-title">
                          {item.name}
                          <p className="sub-title-nav">{item.description}</p>
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="header-bottom-block-right col-9">
              <div className="header-bottom-search">
                <form className="header-bottom-form">
                  <input
                    className="header-bottom-form-input"
                    type="search"
                    placeholder="ENTER YOUR KEYWORD"
                  ></input>
                  <button className="header-bottom-form-button">
                    <span>
                      <i className="seacrh-icon">
                        <FaSearch />
                      </i>
                    </span>
                  </button>
                </form>
              </div>
              {/* <div className="header-bottom-address">
                <div className="header-bottom-address-box">
                  <ul className="header-bottom-address-list">
                    <li className="header-bottom-address-item">
                      <h3 className="header-bottom-address-item-name">
                        seattle :
                      </h3>
                      <p className="header-bottom-address-item-number mt-5">
                        084-2525-6868
                      </p>
                      <p className="header-bottom-address-item-email">
                        greenbee@domain.com
                      </p>
                      <p className="header-bottom-address-item-address mt-5">
                        PO Box 1622 Vissaosang Street West
                      </p>
                    </li>
                    <li className="header-bottom-address-item">
                      <h3 className="header-bottom-address-item-name">
                        chicago :
                      </h3>
                      <p className="header-bottom-address-item-number mt-5">
                        084-2525-6868
                      </p>
                      <p className="header-bottom-address-item-email">
                        sonata@domain.com
                      </p>
                      <p className="header-bottom-address-item-address mt-5">
                        PO Box 1622 Vissaosang Street West
                      </p>
                    </li>
                  </ul>
                  <div className="header-bottom-address-number">
                    084-2525-6868
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-mobile-vertical-menu"></div>
      </div>
    </div>
  );
}

export default Header;
