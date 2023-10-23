import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";

const Men = () => {
  const [mens, setMens] = useState([]);

  const getMens = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/men's%20clothing"
      );
      const data = await response.json();
      //console.log(data);
      setMens(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMens();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <h2>Men's Clothing</h2>
        <div className="content-wrapper">
          <div className="sidebar">Left Column</div>
          <div className="content-primary">
            <Card category={mens} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Men;
