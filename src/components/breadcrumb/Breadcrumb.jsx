import { Link, useLocation } from "react-router-dom";

import "../breadcrumb/Breadcrumb.css";
import { AiOutlineRight } from "react-icons/ai";

const Breadcrumb = () => {
  const location = useLocation();
  console.log(location.pathname);
  let categoryName = location.pathname.split("/");

  return (
    <div className="breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <AiOutlineRight />
        </li>
        <li>
          <Link to={location.pathname}>
            {categoryName[1].replace(/%20/g, " ")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
