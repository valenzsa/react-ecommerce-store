import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../quickview/Quickview.css";
import QuickviewContent from "./QuickviewContent";

const Quickview = ({ ...cat }) => {
  const [quickview, setQuickview] = useState(false);
  return (
    <button onClick={() => setQuickview(true)}>
      <AiOutlineSearch />
      {quickview ? <QuickviewContent {...cat} /> : null}
    </button>
  );
};
export default Quickview;
