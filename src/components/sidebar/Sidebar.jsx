import { FaStar } from "react-icons/fa";
import "../sidebar/Sidebar.css";

const Sidebar = ({
  categoryName,
  products,
  setProducts,
  isChecked,
  setIsChecked,
}) => {
  const getProducts = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterByPriceHandler = (e) => {
    if (e.target.checked) {
      setIsChecked(true);
      console.log(e.target.attributes[1].value);
      const filterByPrice = products.filter(
        (product) => product.price <= e.target.attributes[1].value
      );
      setProducts(filterByPrice);
    } else {
      setIsChecked(false);
      getProducts();
    }
  };

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
            <input
              type="checkbox"
              onChange={filterByPriceHandler}
              data-price="49"
            />{" "}
            $0 - $49.00
          </li>
          <li>
            <input
              type="checkbox"
              onChange={filterByPriceHandler}
              data-price="99"
            />
            $50.00 - $99.00
          </li>
          <li>
            <input
              type="checkbox"
              onChange={filterByPriceHandler}
              data-price="149"
            />
            $100.00 - $149.00
          </li>
          <li>
            <input
              type="checkbox"
              onChange={filterByPriceHandler}
              data-price="199"
            />
            $150.00 - $199.00
          </li>
          <li>
            <input
              type="checkbox"
              onChange={filterByPriceHandler}
              data-price="200"
            />
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
