import { Routes, Route, BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import "./assets/scss/styles.scss";

// Components
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";

// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {false && <Header />}
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
      {false && <Footer />}
    </BrowserRouter>
  );
}

export default App;
