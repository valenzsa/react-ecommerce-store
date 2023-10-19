import { FaStar, FaHeart } from "react-icons/fa";
import "../card/Card.css";

const Card = ({ electronics }) => {
  const hasDecimal = (num) => {
    return num % 1 !== 0;
  };

  const starRating = () => {
    // console.log(number);
    let star = "";
    for (let i = 0; i <= 4; i++) {
      star += <div className="star"></div>;
    }
    console.log(typeof star);
    return star;
  };

  return (
    <div className="card-container">
      {electronics.map((electronic) => {
        return (
          <div className="card" key={electronic.id}>
            <div className="card-thumbnail">
              <FaHeart />
              <img src={electronic.image} alt={electronic.title} />
            </div>
            <div className="card-content">
              <h3>{electronic.title.substring(0, 50)}...</h3>
              <div className="rating">
                {/* {Math.floor(electronic.rating.rate)} */}
                {electronic.rating.rate}
                <div className="stars">
                  <div className="star">
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="card-price">
                $
                {hasDecimal(electronic.price)
                  ? electronic.price
                  : electronic.price + ".00"}
              </div>
              <button className="card-add-to-cart">Add To Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
