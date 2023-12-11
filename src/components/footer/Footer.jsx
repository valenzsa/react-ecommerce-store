import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCcAmex,
  FaApplePay,
  FaGooglePay,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";
import "./Footer.css";
import categories from "../../categoriesData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-block subscribe">
            <h3>Newsletter Signup</h3>
            <p>
              Subscribe to our newsletter and <br />
              get 10% off your first purchase
            </p>
            <input type="email" value="Enter Your Email Here" />
            <button type="submit" value="Subscribe">
              Subscribe
            </button>
            <p>Stay tuned with us!</p>
          </div>
          <div className="footer-block information">
            <h3>Information</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <a href="#" title="">
                  Search
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Contacts
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Our News
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-block shopping">
            <h3>Get Shopping</h3>
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
          <div className="footer-block contacts">
            <h3>Contacts</h3>
            <ul>
              <li>Phone: +1-234-567-8900</li>
              <li>Email: loremipsum@gmail.com</li>
              <li>Address: 123 Street Name, City Name, Country Name</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; 2023, Fashion Store</p>
          <ul className="social-media">
            <li>
              <a href="#" title="Instagram">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" title="Facebook">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" title="Youtube">
                <FaYoutube />
              </a>
            </li>
          </ul>
          <ul className="payment">
            <li>
              <a href="#" title="American Express">
                <FaCcAmex />
              </a>
            </li>
            <li>
              <a href="#" title="Apple Pay">
                <FaApplePay />
              </a>
            </li>
            <li>
              <a href="#" title="Google Pay">
                <FaGooglePay />
              </a>
            </li>
            <li>
              <a href="#" title="Mastercard">
                <FaCcMastercard />
              </a>
            </li>
            <li>
              <a href="#" title="Visa">
                <FaCcVisa />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
