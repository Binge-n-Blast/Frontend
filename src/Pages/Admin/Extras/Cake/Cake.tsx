import "./Cake.scss";
import { useEffect } from "react";

// Components
import Navbar from "../../../../Components/Admin/Navbar/Navbar";
import Form from "../Form/Form";

// Images
import cake from "../../../../Components/Admin/Sidebar/Assets/cake.png";
import cakesImg1 from "../../../User/Theater/Assets/cakesImg1.png";
import cakesImg2 from "../../../User/Theater/Assets/cakesImg2.png";
import cakesImg3 from "../../../User/Theater/Assets/cakesImg3.png";
import cakesImg4 from "../../../User/Theater/Assets/cakesImg4.png";
import cakesImg5 from "../../../User/Theater/Assets/cakesImg5.png";
import cakesImg6 from "../../../User/Theater/Assets/cakesImg6.png";
import deleteIcon from "./Assets/delete.png";

// Redux
import { useDispatch,useSelector } from "react-redux";
import { handlePopupOpen } from "../../../../Redux/Slices/Admin/popupSlice";
import { handleFormOpen,handleFormTitle } from "../../../../Redux/Slices/Admin/formSlice";

import { RootState } from "../../../../Redux/Store/store";

const Cake = () => {
  const dispatch = useDispatch();


  const handlePopupOpenModal = () => {
    dispatch(handlePopupOpen());
  };

  const handleFormOpenModal = () => {
    dispatch(handleFormOpen());
  };

  useEffect(() => {
    dispatch(handleFormTitle("Add new cake"));
  }, []);
  
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
      <Form />
      <Navbar title="Cakes" image={cake} />
      <section className="cake">
        <div className="add">
          <button onClick={handleFormOpenModal}>Add New Cake!</button>
        </div>

        <div className="cards">
          {cakesData.map((card) => (
            <div className="card" key={card.id}>
              <img
                src={deleteIcon}
                onClick={handlePopupOpenModal}
                className="delete"
                alt=""
              />
              <img src={card.img} alt="" className="cake-image" />
              <div className="content">
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                <div className="action">
                  <p>₹ {card.price}</p>
                  <button onClick={handleFormOpenModal}>Edit</button>
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
