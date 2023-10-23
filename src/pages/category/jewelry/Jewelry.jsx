import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";

const Jewelry = () => {
  const [jewelries, setJewelries] = useState([]);

  const getJewelries = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const data = await response.json();
      //console.log(data);
      setJewelries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJewelries();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h2>Jewelry</h2>
        <div className="content-wrapper">
          <div className="sidebar">Left Column</div>
          <div className="content-primary">
            <Card category={jewelries} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Jewelry;
