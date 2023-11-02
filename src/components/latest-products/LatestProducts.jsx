import "../latest-products/LatestProducts.css";
import Card from "../card/Card";
import Loading from "../loading/Loading";

const LatestProducts = ({
  products,
  isOverlay,
  setIsOverlay,
  isLoading,
  setIsLoading,
}) => {
  return (
    <div className="latest-products-container">
      <div className="latest-products">
        <h2>Latest Products</h2>

        {isLoading ? (
          // Display loading component while fetching data
          <Loading />
        ) : (
          <Card
            products={products}
            isOverlay={isOverlay}
            setIsOverlay={setIsOverlay}
          />
        )}
      </div>
    </div>
  );
};
export default LatestProducts;
