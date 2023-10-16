import "./ShopByCategory.css";

const getCategories = [
  {
    name: "electronics",
    image: "/src/assets/electronics.png",
  },
  {
    name: "jewelry",
    image: "/src/assets/jewelry.png",
  },
  {
    name: "men's clothing",
    image: "/src/assets/men.png",
  },
  {
    name: "women's clothing",
    image: "/src/assets/women.png",
  },
];

const ShopByCategory = () => {
  return (
    <div className="shop-by-category-container">
      <div className="shop-by-category">
        <h2>Shop By Category</h2>
        <ul>
          {getCategories.map((category, index) => {
            return (
              <li key={index}>
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
