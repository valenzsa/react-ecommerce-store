import "../card/Card.css";

const Card = ({ electronics }) => {
  const hasDecimal = (num) => {
    return num % 1 !== 0;
  };

  return (
    <div className="card-container">
      {electronics.map((electronic) => {
        return (
          <div className="card" key={electronic.id}>
            <div className="card-thumbnail">
              <img src={electronic.image} alt={electronic.title} />
            </div>
            <div className="card-content">
              <h3>{electronic.title}</h3>
              {/* <div className="rating">{electronic.rating}</div> */}
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
