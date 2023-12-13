import "./Hero.scss";

// Images
import heroImg from "../../Assets/heroImg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="gradient"></div>

      <img src={heroImg} alt="" />

      <div className="content">
        <p>One stop destination for all celebrations</p>
        <h1>
          Enjoy your special moments <br />
          in our Luxurious private <br /> theatres!
        </h1>
      </div>
      <div className="buttons">
        <button className="button1">Book Now!</button>
        <button className="button2">Contact Us!</button>
      </div>
    </div>
  );
};

export default Hero;
