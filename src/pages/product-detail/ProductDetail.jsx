import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../product-detail/ProductDetail.css";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <div className="container">
        <div className="product-details">
          <div className="gallery">
            <div className="slider">
              <img src="https://placehold.co/500x500" alt="" />
              <ul>
                <li>
                  <img src="https://placehold.co/100x100" alt="" />
                </li>
                <li>
                  <img src="https://placehold.co/100x100" alt="" />
                </li>
                <li>
                  <img src="https://placehold.co/100x100" alt="" />
                </li>
                <li>
                  <img src="https://placehold.co/100x100" alt="" />
                </li>
              </ul>
            </div>
            <div className="product-description">
              <h3>Product Description</h3>
              <p>Product desciptions goes here...</p>
            </div>
            <div className="recommended-products"></div>
            <div className="customer-reviews"></div>
          </div>
          <div className="overview">
            <div className="product-title">
              <h3>Product Title</h3>
            </div>
            <div className="product-price">
              <p>$499.99</p>
            </div>
            <div className="rating"></div>
            <div className="add-to-cart">
              <button>Add To Cart</button>
            </div>
            <div className="wishlist">
              <button>Wishlist</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ProductDetail;
