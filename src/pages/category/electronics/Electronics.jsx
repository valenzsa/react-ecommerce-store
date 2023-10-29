import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";
import Sidebar from "../../../components/sidebar/Sidebar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Overlay from "../../../components/overlay/Overlay";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);
  const [isOverlay, setIsOverlay] = useState(false);
  //console.log("isOverlay");
  //console.log(isOverlay);

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
        <Breadcrumb />
        <h2>Electronics</h2>
        <div className="content-wrapper">
          <Sidebar />
          <div className="content-primary">
            <Card
              category={electronics}
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
export default Electronics;
