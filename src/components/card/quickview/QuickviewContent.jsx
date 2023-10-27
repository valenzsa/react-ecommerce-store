import { AiOutlineClose } from "react-icons/ai";
import "../quickview/QuickviewContent.css";

const QuickviewContent = ({
  isOverlay,
  setIsOverlay,
  quickview,
  setQuickview,
  ...cat
}) => {
  console.log(cat);

  const closeQuickView = () => {
    setIsOverlay(false);
    console.log("closeQuickview");
    setQuickview(false);
  };

  return (
    <div className="quickview-product">
      <button className="close" onClick={closeQuickView}>
        <AiOutlineClose />
      </button>
      <div className="quickview-product-image">
        <img src={cat.image} alt={cat.title} />
      </div>
      <div className="quickview-product-content">
        <h3>{cat.title}</h3>
        <p className="price">${cat.price}</p>
        <p className="description">{cat.description}</p>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
};
export default QuickviewContent;
