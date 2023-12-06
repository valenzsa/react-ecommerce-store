import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";

import "../card/Card.css";
import Quickview from "./quickview/Quickview";
import Wishlist from "./wishlist/Wishlist";
import { Link } from "react-router-dom";
import ProductDetail from "../../pages/product-detail/ProductDetail";

const Card = ({
  products,
  isOverlay,
  setIsOverlay,
  isChecked,
  setIsChecked,
  filteredCategorySelection,
}) => {
  console.log("Card");
  console.log(products);
  // console.log("category");
  // console.log(category);

  // console.log("isOverlay card");
  // console.log(isOverlay);

  // console.log("setIsOverlay card");
  // console.log(setIsOverlay);

  console.log(filteredCategorySelection);

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

  // const wishList = () => {
  //   console.log("mouseover");
  //   <AiFillHeart />;
  //   // <AiOutlineHeart />
  // };

  return (
    <div className="card-container">
      {isChecked
        ? filteredCategorySelection.length === 0
          ? "No results found."
          : filteredCategorySelection.map((cat) => {
              return (
                <div className="card" key={cat.id} id={cat.id}>
                  <div className="card-thumbnail">
                    <div className="product-buttons">
                      <ul>
                        <li>
                          <Wishlist {...cat} />
                        </li>
                        <li>
                          <Quickview
                            {...cat}
                            isOverlay={isOverlay}
                            setIsOverlay={setIsOverlay}
                          />
                        </li>
                      </ul>
                    </div>

                    <img src={cat.image} alt={cat.title} />
                  </div>
                  <div className="card-content">
                    <h3>
                      <Link to={`/${cat.category}/${cat.id}`}>
                        {cat.title.substring(0, 40)}...
                      </Link>
                    </h3>
                    <div className="rating">
                      {cat.rating.rate}
                      <div className="stars">
                        <div className="star">
                          <FaStar />
                        </div>
                      </div>
                    </div>
                    <div className="card-price">
                      ${hasDecimal(cat.price) ? cat.price : cat.price + ".00"}
                    </div>
                    <button className="card-add-to-cart">Add To Cart</button>
                  </div>
                </div>
              );
            })
        : products.map((cat) => {
            return (
              <div className="card" key={cat.id} id={cat.id}>
                <div className="card-thumbnail">
                  <div className="product-buttons">
                    <ul>
                      <li>
                        <Wishlist {...cat} />
                      </li>
                      <li>
                        <Quickview
                          {...cat}
                          isOverlay={isOverlay}
                          setIsOverlay={setIsOverlay}
                        />
                      </li>
                    </ul>
                  </div>

                  <img src={cat.image} alt={cat.title} />
                </div>
                <div className="card-content">
                  <h3>
                    <Link to={`/${cat.category}/${cat.id}`}>
                      {cat.title.substring(0, 40)}...
                    </Link>
                  </h3>
                  <div className="rating">
                    {cat.rating.rate}
                    <div className="stars">
                      <div className="star">
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <div className="card-price">
                    ${hasDecimal(cat.price) ? cat.price : cat.price + ".00"}
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
