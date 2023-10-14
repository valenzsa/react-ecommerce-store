import "../hero/Hero.css";
import slider1 from "../../assets/slider-01.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-content">
          <p>Summer 2023</p>
          <h1>New Arrival Collection</h1>
          <button>Explore Now</button>
        </div>
        <img src={slider1} alt="Slider 01" />
      </div>
    </div>
  );
};
export default Hero;
