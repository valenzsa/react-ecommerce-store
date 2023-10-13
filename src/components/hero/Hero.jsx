import "../hero/Hero.css";
import slider1 from "../../assets/slider-01.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <img src={slider1} alt="Slider 01" />
      </div>
    </div>
  );
};
export default Hero;
