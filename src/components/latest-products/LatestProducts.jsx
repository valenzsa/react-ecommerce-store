import "../latest-products/LatestProducts.css";
import Card from "../card/Card";

const LatestProducts = ({ products, isOverlay, setIsOverlay }) => {
  return (
    <div className="latest-products-container">
      <div className="latest-products">
        <h2>Latest Products</h2>
        <Card
          products={products}
          isOverlay={isOverlay}
          setIsOverlay={setIsOverlay}
        />
      </div>
    </div>
  );
};
export default LatestProducts;
