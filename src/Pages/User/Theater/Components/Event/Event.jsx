import "./Event.scss";

// Images
import eventImg1 from "../../Assets/eventImg1.png";
import eventImg2 from "../../Assets/eventImg2.png";
import eventImg3 from "../../Assets/eventImg3.png";
import eventImg4 from "../../Assets/eventImg4.png";
import eventImg5 from "../../Assets/eventImg5.png";
import eventImg6 from "../../Assets/eventImg6.png";

const Event = () => {


  const eventData = [
    {
      id: 1,
      img: eventImg1,
      title: "Birthday",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 2,
      img: eventImg2,
      title: "Anniversary",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 3,
      img: eventImg3,
      title: "Proposal",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 4,
      img: eventImg4,
      title: "Bride to Be",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 5,
      img: eventImg5,
      title: "Baby Shower",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 6,
      img: eventImg6,
      title: "Mom to Be",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
  ];

  return (
    <section className="main-container">
      <div className="blue-blob"></div>
      <div className="red-blob"></div>
      <div className="heading">
        <h2>What we offer</h2>
        <p>
          We aim to provide everything you need to enjoy your special moments.{" "}
          <br />
          Our comprehensive offerings include
        </p>
      </div>
      <section className="event-container">
        <h3>Event Decoration</h3>

        <div className="cards">
          {eventData.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.img} alt="" />
              <div className="content">
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                <div className="action">
                  <p>₹ {card.price}</p>
                  <button>Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Event;
