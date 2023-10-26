import { Link, useLocation } from "react-router-dom";

import "../breadcrumb/Breadcrumb.css";
import { AiOutlineRight } from "react-icons/ai";

const Breadcrumb = () => {
  const location = useLocation();

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
          <Link to={location.pathname}>{location.pathname.split("/")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
