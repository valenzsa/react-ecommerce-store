import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "../wishlist/Wishlist.css";

const Wishlist = () => {
  const [wishList, setWishList] = useState(false);

  return (
    <div
      className="wishlist"
      onMouseEnter={() => setWishList(true)}
      onMouseLeave={() => setWishList(false)}
    >
      {wishList ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};
export default Wishlist;
