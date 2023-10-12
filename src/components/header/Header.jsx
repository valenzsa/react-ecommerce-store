import "./Header.css";
import logo from "../../assets/fashion-store-logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Fashion Store" />
        </div>
        <div className="navigation">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="secondary-navigation">
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
