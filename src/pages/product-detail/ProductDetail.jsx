import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import trust_images from "../../assets/trust_img.png";
import "../product-detail/ProductDetail.css";
import { useState } from "react";

const ProductDetail = ({ products, setProducts }) => {
  console.log("productDetail - products");
  console.log(products);

  const urlProductId = useParams();
  console.log("urlProductId");
  console.log(urlProductId.id);
  console.log(typeof urlProductId.id);

  // const [product, setProduct] = useState("");

  const productDetail = products.filter(
    (product) => product.id === parseInt(urlProductId.id)
  );

  console.log(productDetail);

  return (
    <>
      <Header />
      <Breadcrumb />
      <div className="container">
        <div className="product-details">
          <div className="gallery">
            <div className="slider">
              <img src={productDetail[0].image} alt="" />
            </div>

            <div className="recommended-products"></div>
            <div className="customer-reviews"></div>
          </div>
          <div className="overview">
            <div className="product-title">
              <h3>{productDetail[0].title}</h3>
            </div>
            <div className="product-price">
              <p>${productDetail[0].price}</p>
            </div>
            <div className="product-description">
              <p>{productDetail[0].description}</p>
            </div>
            <div className="rating"></div>
            <button className="add-to-cart">Add To Cart</button>
            {/* <div className="wishlist">
              <button>Wishlist</button>
            </div> */}

            <img src={trust_images} alt="Trust" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ProductDetail;
