import "./Header.css";
import logo from "../../assets/fashion-store-logo.jpg";
import {
  FaSignInAlt,
  FaUserPlus,
  FaShoppingCart,
  FaSearch,
  FaChevronDown,
  FaHeadphones,
  FaTshirt,
} from "react-icons/fa";
import { BsStopwatch, BsWatch } from "react-icons/bs";
import { GiLargeDress } from "react-icons/gi";
import categories from "../../categoriesData";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-top">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Fashion Store" />
            </Link>
          </div>
          <div className="search-box">
            <form action="#" method="" className="search-form">
              <div className="search-form-fields">
                <input type="text" placeholder="Search..." />
                <div className="search-form-dropdown">
                  <p>
                    All Categories <FaChevronDown />
                  </p>
                  <div className="search-form-dropdown-selections">
                    <ul>
                      <li>Electronics</li>
                      <li>Jewelry</li>
                      <li>Men's Clothing</li>
                      <li>Women's Clothing</li>
                    </ul>
                  </div>
                </div>
                <button type="submit" className="btn btn-search" title="Search">
                  <FaSearch />
                </button>
              </div>
            </form>
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
        <div className="header-bottom">
          <div className="navigation">
            <ul>
              {categories.map((category) => {
                switch (category.name) {
                  case "electronics":
                    return (
                      <li key={category.id}>
                        <Link to={`/${category.linkName}`}>
                          <FaHeadphones /> {category.name}
                        </Link>
                      </li>
                    );
                    break;
                  case "jewelry":
                    return (
                      <li key={category.id}>
                        <Link to={`/${category.linkName}`}>
                          <BsWatch /> {category.name}
                        </Link>
                      </li>
                    );
                    break;
                  case "men's clothing":
                    return (
                      <li key={category.id}>
                        <Link to={`/${category.linkName}`}>
                          <FaTshirt /> {category.name}
                        </Link>
                      </li>
                    );
                    break;
                  case "women's clothing":
                    return (
                      <li key={category.id}>
                        <Link to={`/${category.linkName}`}>
                          <GiLargeDress /> {category.name}
                        </Link>
                      </li>
                    );
                    break;
                }

                // if (category.name === "electronics") {
                //   return (
                //     <li key={category.id}>
                //       <Link to={`/${category.linkName}`}>
                //         <FaHeadphones /> {category.name}
                //       </Link>
                //     </li>
                //   );
                // } else if (category.name === "jewelery") {
                //   return (
                //     <li key={category.id}>
                //       <Link to={`/${category.linkName}`}>
                //         <BsWatch /> {category.name}
                //       </Link>
                //     </li>
                //   );
                // } else {
                //   return (
                //     <li key={category.id}>
                //       <Link to={`/${category.linkName}`}>{category.name}</Link>
                //     </li>
                //   );
                // }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
