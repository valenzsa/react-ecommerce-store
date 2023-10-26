import { Link } from "react-router-dom";
import "../breadcrumb/Breadcrumb.css";

const Breadcrumb = (electronics) => {
  console.log("breadcrumb");
  console.log(electronics);
  return (
    <div className="breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {electronics.map((electronic) => {
          return (
            <li>
              <Link to={electronic.category}>{electronic.category}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
