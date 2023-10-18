import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  const getElectronics = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const data = await response.json();
      //console.log(data);
      setElectronics(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getElectronics();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h2>Electronics</h2>
        <div className="content-wrapper">
          <div className="sidebar">Left Column</div>
          <div className="content-primary">
            <Card electronics={electronics} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Electronics;
