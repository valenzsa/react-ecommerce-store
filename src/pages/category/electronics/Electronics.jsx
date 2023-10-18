import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/Card";

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
      <h2>Electronics</h2>
      <Card electronics={electronics} />
      <Footer />
    </>
  );
};
export default Electronics;
