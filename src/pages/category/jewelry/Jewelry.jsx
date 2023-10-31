import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";
import Sidebar from "../../../components/sidebar/Sidebar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Overlay from "../../../components/overlay/Overlay";

const Jewelry = () => {
  const [products, setProducts] = useState([]);
  const [isOverlay, setIsOverlay] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const getJewelries = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const data = await response.json();
      //console.log(data);
      setProducts(data);
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
          <Sidebar
            categoryName={"jewelery"}
            products={products}
            setProducts={setProducts}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          <div className="content-primary">
            <Card
              products={products}
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
export default Jewelry;
