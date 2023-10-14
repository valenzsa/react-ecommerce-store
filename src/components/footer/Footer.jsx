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
              <a href="#" title="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <FaYoutube />
              </a>
            </li>
          </ul>
          <ul className="payment">
            <li>
              <a href="#" title="">
                <FaCcAmex />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <FaApplePay />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <FaGooglePay />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <FaCcMastercard />
              </a>
            </li>
            <li>
              <a href="#" title="">
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
