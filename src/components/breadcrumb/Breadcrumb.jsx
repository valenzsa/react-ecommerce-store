import { Link, useLocation, useParams } from "react-router-dom";

import "../breadcrumb/Breadcrumb.css";
import { AiOutlineRight } from "react-icons/ai";

const Breadcrumb = () => {
  // const location = useLocation();
  // console.log(location.pathname);
  // let categoryName = location.pathname.split("/");

  const params = useParams();
  // console.log("params...");
  // console.log(params);

  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <AiOutlineRight />
          </li>
          <li>
            <Link to={params.category}>
              {/* {categoryName[1].replace(/%20/g, " ")} */}
              {params.category}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
