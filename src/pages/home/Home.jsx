import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import LatestProducts from "../../components/latest-products/LatestProducts";
import ShopByCategory from "../../components/shop-by-category/ShopByCategory";
import "./Home.css";
import Overlay from "../../components/overlay/Overlay";
const Home = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchLatestProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=6");
      const data = await response.json();
      //console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <ShopByCategory />
      <LatestProducts
        products={products}
        isOverlay={isOverlay}
        setIsOverlay={setIsOverlay}
      />
      <Footer />
      {isOverlay ? <Overlay /> : null}
    </>
  );
};
export default Home;
