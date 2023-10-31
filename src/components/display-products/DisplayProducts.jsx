import Card from "../card/Card";
import Loading from "../loading/Loading";
const DisplayProducts = ({
  isLoading,
  products,
  isOverlay,
  setIsOverlay,
  isChecked,
  setIsChecked,
}) => {
  return (
    <>
      {isLoading ? (
        // Display loading component while fetching data
        <Loading />
      ) : (
        <Card
          products={products}
          isOverlay={isOverlay}
          setIsOverlay={setIsOverlay}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      )}
    </>
  );
};

export default DisplayProducts;
