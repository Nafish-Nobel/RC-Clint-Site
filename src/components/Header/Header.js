import React from "react";
import Slider from "./Slider/Slider";
import Nevigation from "./Nevigation/Nevigation";
import TopBanner from "./TopBanner/TopBanner";

const Header = () => {
  return (
    <div>
      
      <TopBanner/>
      <Nevigation/>
      <Slider/>
      
    </div>
  );
};

export default Header;
