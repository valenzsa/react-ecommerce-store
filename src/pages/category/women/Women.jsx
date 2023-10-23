import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";
import Sidebar from "../../../components/sidebar/Sidebar";

const Women = () => {
  const [womens, setWomens] = useState([]);

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
        <h2>Women's Clothing</h2>
        <div className="content-wrapper">
          <Sidebar />
          <div className="content-primary">
            <Card category={womens} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Women;
