import "./Cake.scss";
import Navbar from "../../../../Components/Admin/Navbar/Navbar";

// Images
import cake from "../../../../Components/Admin/Sidebar/Assets/cake.png";
import cakesImg1 from "../../../User/Theater/Assets/cakesImg1.png";
import cakesImg2 from "../../../User/Theater/Assets/cakesImg2.png";
import cakesImg3 from "../../../User/Theater/Assets/cakesImg3.png";
import cakesImg4 from "../../../User/Theater/Assets/cakesImg4.png";
import cakesImg5 from "../../../User/Theater/Assets/cakesImg5.png";
import cakesImg6 from "../../../User/Theater/Assets/cakesImg6.png";
import deleteIcon from "./Assets/delete.png";

// Components
import Form from "../Form/Form";
import Popup from "../../../../Components/Popup/Popup";

// Redux
import { useDispatch } from "react-redux";
import { handleOpen } from "../../../../Redux/Slices/Admin/popupSlice";

const Cake = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(handleOpen());
  };

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
    <>
      <Navbar title="Cakes" image={cake} />
      <Popup />
      <section className="cake">
        <div className="add">
          <Form />
        </div>

        <div className="cards">
          {cakesData.map((card) => (
            <div className="card" key={card.id}>
              <img
                src={deleteIcon}
                onClick={handleOpenModal}
                className="delete"
                alt=""
              />
              <img src={card.img} alt="" className="cake-image" />
              <div className="content">
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                <div className="action">
                  <p>₹ {card.price}</p>
                  <button>Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cake;
