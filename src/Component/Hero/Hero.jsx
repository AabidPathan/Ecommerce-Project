import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/wave.png";
import arrow_icon from "../../assets/arrow-right.svg";
import men from "../../assets/men.webp";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals ! Best Price !</h2>

        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" height="60px" />
        </div>
        <p>collection</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" height="30px" />
        </div>
      </div>

      <div className="hero-right">
        <img src={men} alt="" height="500px" />
      </div>
    </div>
  );
};

export default Hero;
