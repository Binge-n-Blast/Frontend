import "./Decoration.scss";
import { useEffect } from "react";

// Components
import Navbar from "../../../../Components/Admin/Navbar/Navbar";
import Form from "../Form/Form";


// Images
import decoration from "../../../../Components/Admin/Sidebar/Assets/decoration.png";

import eventImg1 from "../../../User/Theater/Assets/eventImg1.png";
import eventImg2 from "../../../User/Theater/Assets/eventImg2.png";
import eventImg3 from "../../../User/Theater/Assets/eventImg3.png";
import eventImg4 from "../../../User/Theater/Assets/eventImg4.png";
import eventImg5 from "../../../User/Theater/Assets/eventImg5.png";
import eventImg6 from "../../../User/Theater/Assets/eventImg6.png";
import deleteIcon from "../Cake/Assets/delete.png";

// Redux
import { useDispatch } from "react-redux";
import { handlePopupOpen } from "../../../../Redux/Slices/Admin/popupSlice";
import { handleFormOpen,handleFormTitle } from "../../../../Redux/Slices/Admin/formSlice";


const Decoration = () => {
  const dispatch = useDispatch();

  const handlePopupOpenModal = () => {
    dispatch(handlePopupOpen());
  };

  const handleFormOpenModal = () => {
    dispatch(handleFormOpen());
  };

  useEffect(() => {
    dispatch(handleFormTitle("Add new decoration"));
  }, []);



  const decorationData = [
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
    <>
    <Form/>
      <Navbar title="Decorations" image={decoration} />
      <section className="decoration">
        <div className="add">
          <button onClick={handleFormOpenModal}>Add New Decoration!</button>
        </div>

        <div className="cards">
          {decorationData.map((card) => (
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

export default Decoration;
