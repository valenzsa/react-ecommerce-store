import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";
import Sidebar from "../../../components/sidebar/Sidebar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Overlay from "../../../components/overlay/Overlay";

const Women = () => {
  const [womens, setWomens] = useState([]);
  const [isOverlay, setIsOverlay] = useState(false);

  const getWomens = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
      );
      const data = await response.json();
      //console.log(data);
      setWomens(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWomens();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
        <h2>Women's Clothing</h2>
        <div className="content-wrapper">
          <Sidebar />
          <div className="content-primary">
            <Card
              category={womens}
              isOverlay={isOverlay}
              setIsOverlay={setIsOverlay}
            />
          </div>
        </div>
      </div>
      <Footer />
      {isOverlay ? <Overlay /> : null}
    </>
  );
};
export default Women;
