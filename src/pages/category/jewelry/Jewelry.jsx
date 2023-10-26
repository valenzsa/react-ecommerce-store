import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";
import Sidebar from "../../../components/sidebar/Sidebar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

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
        <Breadcrumb />
        <h2>Jewelry</h2>
        <div className="content-wrapper">
          <Sidebar />
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
