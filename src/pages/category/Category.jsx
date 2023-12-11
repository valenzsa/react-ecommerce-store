import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DisplayProducts from "../../components/display-products/DisplayProducts";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Overlay from "../../components/overlay/Overlay";
import Sidebar from "../../components/sidebar/Sidebar";
import categoriesObj from "../../categoriesData";
import "../category/Category.css";
import { useState, useEffect } from "react";

const Category = ({ categoryName, setCategoryName, products, setProducts }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filteredCategorySelection, setFilteredCategorySelection] = useState(
    []
  );

  const urlParams = useParams();
  console.log("urlParams.category");
  console.log(urlParams.category);

  console.log(categoriesObj[2].name);

  // TODO: REVISIT TO REFACTOR
  // Matching urlParams to categories category data
  // Cannot use Fake Store API's category name in the url since men's and women's clothing has an apostrophes
  switch (urlParams.category) {
    case "electronics":
      setCategoryName(categoriesObj[0].name);
      break;

    case "jewelery":
      setCategoryName(categoriesObj[1].name);
      break;

    case "men":
      setCategoryName(categoriesObj[2].name);
      break;
    case "women":
      setCategoryName(categoriesObj[3].name);
      break;
  }

  //TODO:
  // BE ABLE TO UPDATE PARAMETER

  const getCategoryData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      console.log("response");
      console.log(response);

      // Set loading and error state to true when there's a problem with fetching data
      if (!response.ok) {
        setIsLoading(true);
        setIsError(true);
      }

      const data = await response.json();
      // console.log("data");
      // console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    // Set loading state to false when everything goes well
    setIsLoading(false);
  };

  useEffect(() => {
    getCategoryData();

    return () => {
      console.log("clean up");
    };
  }, [categoryName]);

  return (
    <>
      <Header setCategoryName={setCategoryName} />
      <Breadcrumb />
      <div className="container">
        <h2>{`${categoryName}`}</h2>
        <div className="content-wrapper">
          <Sidebar
            categoryName={`${categoryName}`}
            products={products}
            setProducts={setProducts}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            filteredCategorySelection={filteredCategorySelection}
            setFilteredCategorySelection={setFilteredCategorySelection}
          />
          <div className="content-primary">
            <DisplayProducts
              isLoading={isLoading}
              products={products}
              isOverlay={isOverlay}
              setIsOverlay={setIsOverlay}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              filteredCategorySelection={filteredCategorySelection}
            />
          </div>
        </div>
      </div>
      <Footer />
      {isOverlay ? <Overlay /> : null}
    </>
  );
};
export default Category;
