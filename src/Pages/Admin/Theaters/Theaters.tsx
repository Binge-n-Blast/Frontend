import "./Theaters.scss";

import Navbar from "../../../Components/Admin/Navbar/Navbar";

//Images
import theater from "../../../Components/Admin/Sidebar/Assets/theater.png";

// Images
import img1 from "../../User/Theaters/Assets/img1.png";
import img2 from "../../User/Theaters/Assets/img2.png";
const Theaters = () => {
  interface Cards {
    img: string;
    title: string;
    desc: string;
    price: number;
  }

  const cardsData: Cards[] = [
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
  ];
  return (
    <>
      <Navbar title="Theaters" image={theater} />
      <section className="admin-theaters">
        <div className="blue-blob"></div>
        <div className="red-blob"></div>
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Theaters;
