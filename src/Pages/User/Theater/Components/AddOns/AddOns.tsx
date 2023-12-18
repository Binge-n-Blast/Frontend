import "./AddOns.scss";

// Images
import addOnsImg1 from "../../Assets/addOnsImg1.png";
import addOnsImg2 from "../../Assets/addOnsImg2.png";
import addOnsImg3 from "../../Assets/addOnsImg3.png";

const AddOns = () => {
  interface CakesData {
    id: number;
    img: string;
    title: string;
    desc: string;
    price: number;
  }

  const cakesData: CakesData[] = [
    {
      id: 1,
      img: addOnsImg1,
      title: "HDB Lights",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 2,
      img: addOnsImg2,
      title: "LED Lights",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 3,
      img: addOnsImg3,
      title: "Photo Clippings",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
  ];
  return (
    <section className="addOns-container">
      <h3>Add On's</h3>
      <div className="cards">
        {cakesData.map((card) => (
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
  );
};

export default AddOns;
