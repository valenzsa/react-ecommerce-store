import { useState, useRef } from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "../card/Card.css";

const Card = ({ category }) => {
  console.log("category");
  console.log(category);
  const [wishList, setWishList] = useState(false);
  const wishListRef = useRef(null);

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

  const myWishList = (id) => {
    console.log(id);
    console.log(wishListRef);
    console.log(wishListRef.current.classList.contains("wishlisted"));

    let cardCollection =
      wishListRef.current.parentElement.parentElement.parentElement.children;

    console.log(typeof cardCollection);

    for (let card of cardCollection) {
      console.log("card.id is: " + card.id);
      console.log("id is: " + id);
      if (card.id == id) {
        //card.style.backgroundColor = "#ffcc00";
        card.classList.add("wishlisted");
      }
    }
  };

  return (
    <div className="card-container">
      {category.map((cat) => {
        return (
          <div className="card" key={cat.id} id={cat.id}>
            <div className="card-thumbnail">
              <div className="product-buttons">
                <div
                  className="wishlist"
                  ref={wishListRef}
                  // onMouseOver={() => setWishList(cat.id)}
                  // onMouseOut={() => setWishList(cat.id)}

                  onMouseEnter={() => myWishList(cat.id)}
                  //onMouseOut={() => myWishList(cat.id)}
                >
                  {wishList ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
              </div>

              <img src={cat.image} alt={cat.title} />
            </div>
            <div className="card-content">
              <h3>
                <a href="#" title={cat.title}>
                  {cat.title.substring(0, 40)}...
                </a>
              </h3>
              <div className="rating">
                {/* {Math.floor(cat.rating.rate)} */}
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
