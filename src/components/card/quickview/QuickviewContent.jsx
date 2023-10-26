const QuickviewContent = ({ ...cat }) => {
  console.log(cat);
  return (
    <div className="quickview-product">
      <div className="quickview-product-image">
        <img src={cat.image} alt={cat.title} />
      </div>
      <div className="quickview-product-content">
        <h3>{cat.title}</h3>
        <p>{cat.price}</p>
      </div>
    </div>
  );
};
export default QuickviewContent;
