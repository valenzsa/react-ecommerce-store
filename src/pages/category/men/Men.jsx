import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";
import Sidebar from "../../../components/sidebar/Sidebar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

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
        <Breadcrumb />
        <h2>Men's Clothing</h2>
        <div className="content-wrapper">
          <Sidebar />
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
