import { useState, useEffect } from "react";
import "./ShopByCategory.css";

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setCategories(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="shop-by-category-container">
      <div className="shop-by-category">
        <h2>Shop By Category</h2>
        <ul>
          {categories.map((category, index) => {
            return <li key={index}>{category}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default ShopByCategory;
