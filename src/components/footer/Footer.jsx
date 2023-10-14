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

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-top"></div>
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
