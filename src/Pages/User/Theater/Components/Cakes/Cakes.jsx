import "./Cakes.scss"

// Images
import cakesImg1 from "../../Assets/cakesImg1.png";
import cakesImg2 from "../../Assets/cakesImg2.png";
import cakesImg3 from "../../Assets/cakesImg3.png";
import cakesImg4 from "../../Assets/cakesImg4.png";
import cakesImg5 from "../../Assets/cakesImg5.png";
import cakesImg6 from "../../Assets/cakesImg6.png";

const Cakes = () => {



  const cakesData = [
    {
      id: 1,
      img: cakesImg1,
      title: "Red Velvet",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 2,
      img: cakesImg2,
      title: "Strawberry Cake",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 3,
      img: cakesImg3,
      title: "Oreo Cake",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 4,
      img: cakesImg4,
      title: "Dark Chocolate Cake",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 5,
      img: cakesImg5,
      title: "Raspberry Cake",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
    {
      id: 6,
      img: cakesImg6,
      title: "Chocolate Cake",
      desc: "Celebrate your special day with Special people.",
      price: 699,
    },
  ];

  return (
    <section className="cakes-container">
      <h3>Cakes</h3>

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
  )
}

export default Cakes