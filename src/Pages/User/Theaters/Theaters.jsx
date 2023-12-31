import "./Theaters.scss";
import { Link } from "react-router-dom";

// Images
import img1 from "./Assets/img1.png";
import img2 from "./Assets/img2.png";
import img3 from "./Assets/img3.png";
import img4 from "./Assets/img4.png";

const Theaters = () => {
  const cardsData = [
    {
      img: img1,
      title: "Blockbuster Bliss",
      desc: "₹1899 for 6 or less people (Rs 299 per extra person), Our theatres are equipped with 120 inch enhanced 4k Video. Powerful Dolby atoms sound system.",
      price: 1800,
    },
    {
      img: img2,
      title: "Flicks ‘N Fun",
      desc: "₹1899 for 6 or less people (Rs 299 per extra person), Our theatres are equipped with 120 inch enhanced 4k Video. Powerful Dolby atoms sound system.",
      price: 1800,
    },
    {
      img: img3,
      title: "Blockbuster Bliss",
      desc: "₹1899 for 6 or less people (Rs 299 per extra person), Our theatres are equipped with 120 inch enhanced 4k Video. Powerful Dolby atoms sound system.",
      price: 1800,
    },
    {
      img: img4,
      title: "Drama Delight",
      desc: "₹1899 for 6 or less people (Rs 299 per extra person), Our theatres are equipped with 120 inch enhanced 4k Video. Powerful Dolby atoms sound system.",
      price: 1800,
    },
  ];
  return (
    <section className="theaters">
      <div className="blue-blob1"></div>
      <div className="blue-blob2"></div>
      <div className="red-blob"></div>
      <div className="content">
        <h2>
          We’ll make your next <br />
          celebration very special!
        </h2>
        <p>
          BingeDelight welcomes you for an extraordinary private theatre
          experience with personalized decor. <br /> Our exclusive premium
          private theatres feature enhanced 4K resolution with DOLBY atoms sound
          system.
        </p>
      </div>
      <div className="cards">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="content">
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
            <div className="action">
              <h3>₹ {card.price}</h3>
              <Link to="/theater/123">Book now !</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Theaters;
