import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../quickview/Quickview.css";
import QuickviewContent from "./QuickviewContent";

const Quickview = ({ isOverlay, setIsOverlay, ...cat }) => {
  //console.log(isOverlay);
  //console.log(setIsOverlay);
  const [quickview, setQuickview] = useState(false);
  //const [isOverlay, setIsOverlay] = useState(false);

  const displayQuickView = () => {
    setQuickview(true);
    setIsOverlay(true);
  };

  return (
    <>
      <button onClick={displayQuickView}>
        <AiOutlineSearch />
      </button>
      {quickview ? (
        <QuickviewContent
          {...cat}
          isOverlay={isOverlay}
          setIsOverlay={setIsOverlay}
          quickview={quickview}
          setQuickview={setQuickview}
        />
      ) : null}
    </>
  );
};
export default Quickview;
