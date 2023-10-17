import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import ShopByCategory from "../../components/shop-by-category/ShopByCategory";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShopByCategory />
      <Footer />
    </>
  );
};
export default Home;
