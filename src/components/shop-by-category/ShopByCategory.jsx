import "./ShopByCategory.css";
import categories from "../../categoriesData";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  return (
    <div className="shop-by-category-container">
      <div className="shop-by-category">
        <h2>Shop By Category</h2>
        <ul>
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link to={`/${category.linkName}`}>
                  <img src={category.image} alt={category.name} />
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ShopByCategory;
