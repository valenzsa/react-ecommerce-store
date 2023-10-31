import { useState, useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "../../../components/card/Card";
import Sidebar from "../../../components/sidebar/Sidebar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Overlay from "../../../components/overlay/Overlay";
import DisplayProducts from "../../../components/display-products/DisplayProducts";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [isOverlay, setIsOverlay] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getMens = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/men's%20clothing"
      );

      // Set loading and error state to true when there's a problem with fetching data
      if (!response.ok) {
        setIsLoading(true);
        setIsError(true);
      }

      const data = await response.json();
      //console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    // Set loading state to false when everything goes well
    setIsLoading(false);
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
          <Sidebar
            categoryName={"men's clothing"}
            products={products}
            setProducts={setProducts}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          <div className="content-primary">
            <DisplayProducts
              isLoading={isLoading}
              products={products}
              isOverlay={isOverlay}
              setIsOverlay={setIsOverlay}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          </div>
        </div>
      </div>
      <Footer />
      {isOverlay ? <Overlay /> : null}
    </>
  );
};
export default Men;
