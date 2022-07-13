import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import "./assets/scss/styles.scss";

// Pages
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import { useCallback, useEffect } from "react";
import { KEY_LOCAL_STORAGE } from "./utils/storage";
import UserInfo from "./pages/UserInfo";
import WishList from "./pages/WishList";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Payment from "./pages/Payment";
import ProductDetail from "./pages/ProductDetail";
import PurchaseHistory from "./pages/PurchaseHistory";
import CategoryDetail from "./pages/CategoryDetail";

function App() {
  const navigate = useNavigate();
  const access_token = localStorage.getItem(KEY_LOCAL_STORAGE.ACCESS_TOKEN);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const getProducts = useCallback(
    () => dispatch.product.getProducts(),
    [dispatch]
  );

  useEffect(() => {
    if (!product) {
      getProducts();
    }
  }, [getProducts, product]);

  useEffect(() => {
    if (!access_token) {
      navigate("/login");
    }
  }, [access_token, navigate]);

  return (
    <>
      <div className="app">
        {access_token && <Header />}
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<CategoryDetail />} />
            <Route path="/categories/:id" element={<CategoryDetail />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/purchase-history" element={<PurchaseHistory />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
      {access_token && <Footer />}
    </>
  );
}

export default App;
