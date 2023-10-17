import "./ShopByCategory.css";
import categories from "../../categoriesData";

const ShopByCategory = () => {
  return (
    <div className="shop-by-category-container">
      <div className="shop-by-category">
        <h2>Shop By Category</h2>
        <ul>
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <a href="#" title={category.name}>
                  <img src={category.image} alt={category.name} />
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ShopByCategory;
