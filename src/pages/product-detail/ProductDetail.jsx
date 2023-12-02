import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../product-detail/ProductDetail.css";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
        <div className="product-details">
          <div className="gallery">
            <img src="https://placehold.co/500x500" alt="" />
          </div>
          <div className="overview">
            <div className="product-title"></div>
            <div className="product-description"></div>
            <div className="product-price"></div>
            <div className="add-to-cart"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ProductDetail;
