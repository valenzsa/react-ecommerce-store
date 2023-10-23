import { FaStar } from "react-icons/fa";
import "../sidebar/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div class="filter-block filterByReviews">
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
            <input type="checkbox" /> $0 - $49.00
          </li>
          <li>
            <input type="checkbox" /> $50.00 - $99.00
          </li>
          <li>
            <input type="checkbox" /> $100.00 - $149.00
          </li>
          <li>
            <input type="checkbox" /> $150.00 - $199.00
          </li>
          <li>
            <input type="checkbox" /> $200+
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
