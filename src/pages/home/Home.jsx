import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import LatestProducts from "../../components/latest-products/LatestProducts";
import ShopByCategory from "../../components/shop-by-category/ShopByCategory";
import "./Home.css";
import Overlay from "../../components/overlay/Overlay";

const Home = ({ categoryName, setCategoryName }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchLatestProducts = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=6");

      if (!response.ok) {
        setIsLoading(true);
        setIsError(true);
      }

      const data = await response.json();
      //console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  if (isError) {
    return `There is something wrong.  Check the console log`;
  }

  return (
    <>
      <Header setCategoryName={setCategoryName} />
      <Hero />
      <ShopByCategory />
      <LatestProducts
        products={products}
        isOverlay={isOverlay}
        setIsOverlay={setIsOverlay}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Footer />
      {isOverlay ? <Overlay /> : null}
    </>
  );
};
export default Home;
