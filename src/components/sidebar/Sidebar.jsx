import { FaStar } from "react-icons/fa";
import "../sidebar/Sidebar.css";
import { useEffect } from "react";

const Sidebar = ({ products, setProducts, isChecked, setIsChecked }) => {
  const filterByPriceHandler = (price) => {
    setIsChecked(true);
    console.log(products);
    console.log(price);
    const filterByPrice = products.filter((product) => product.price <= price);
    setProducts(filterByPrice);
  };

  console.log(products);

  return (
    <div className="sidebar">
      <div className="filter-block filterByReviews">
        <h5>Reviews</h5>
        <ul>
          <li>
            <input type="checkbox" /> <FaStar />
          </li>
          <li>
            <input type="checkbox" /> <FaStar />
            <FaStar />
          </li>
          <li>
            <input type="checkbox" /> <FaStar />
            <FaStar />
            <FaStar />
          </li>
          <li>
            <input type="checkbox" /> <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </li>
          <li>
            <input type="checkbox" /> <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </li>
        </ul>
      </div>
      <div className="filter-block filterByPrice">
        <h5>Filter By Price</h5>
        <ul>
          <li>
            <input type="checkbox" onChange={() => filterByPriceHandler(49)} />{" "}
            $0 - $49.00
          </li>
          <li>
            <input type="checkbox" onChange={() => filterByPriceHandler(99)} />{" "}
            $50.00 - $99.00
          </li>
          <li>
            <input type="checkbox" onChange={() => filterByPriceHandler(149)} />{" "}
            $100.00 - $149.00
          </li>
          <li>
            <input type="checkbox" onChange={() => filterByPriceHandler(199)} />{" "}
            $150.00 - $199.00
          </li>
          <li>
            <input type="checkbox" onChange={() => filterByPriceHandler()} />{" "}
            $200+
          </li>
        </ul>
      </div>
      <div className="filter-block filterByProductStatus">
        <h5>Product Status</h5>
        <ul>
          <li>
            <input type="checkbox" /> On Sale
          </li>
          <li>
            <input type="checkbox" /> In Stock
          </li>
          <li>
            <input type="checkbox" /> Wishlisted
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
