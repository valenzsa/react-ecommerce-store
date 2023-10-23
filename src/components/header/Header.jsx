import "./Header.css";
import logo from "../../assets/fashion-store-logo.jpg";
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import categories from "../../categoriesData";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Fashion Store" />
          </Link>
        </div>
        <div className="navigation">
          <ul>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link to={`/${category.linkName}`}>{category.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="secondary-navigation">
          <ul>
            <li>
              <a href="#" title="Login">
                <FaSignInAlt /> Login
              </a>
            </li>
            <li>
              <a href="#" title="Register">
                <FaUserPlus /> Register
              </a>
            </li>
            <li>
              <a href="#" title="Cart">
                <FaShoppingCart /> Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
