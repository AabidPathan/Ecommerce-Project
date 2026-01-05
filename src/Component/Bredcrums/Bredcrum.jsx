import React from "react";
import "./Bredcrums.css";
import arrow_icon from "../../assets/arrow-right.svg";

const Bredcrum = (props) => {
  const { product } = props;
  return (
    <div className="bredcrums">
      Home <img src={arrow_icon} alt="" height="30px" />
      SHOP <img src={arrow_icon} alt="" height="30px" />
      {product.category} <img src={arrow_icon} alt="" height="30px" />
      {product.name} <img src={arrow_icon} alt="" height="30px" />
    </div>
  );
};

export default Bredcrum;
