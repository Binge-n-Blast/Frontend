import "./Addon.scss";
import { toast } from "react-hot-toast";

// Components
import Navbar from "../../../../Components/Admin/Navbar/Navbar";
import Form from "../Form/Form";

// Images
import addon from "../../../../Components/Admin/Sidebar/Assets/addon.png";
import deleteIcon from "../Cake/Assets/delete.png";
import addOnsImg1 from "../../../User/Theater/Assets/addOnsImg1.png";
import addOnsImg2 from "../../../User/Theater/Assets/addOnsImg2.png";
import addOnsImg3 from "../../../User/Theater/Assets/addOnsImg3.png";

// Redux
import { useDispatch } from "react-redux";

import {
  handleFormOpen,
  handleFormTitle,
} from "../../../../Redux/Slices/Admin/formSlice";

const Addon = () => {
  const dispatch = useDispatch();

  const handleFormOpenModal = () => {
    dispatch(handleFormOpen());
    dispatch(handleFormTitle("Add new addon"));
  };

  const handleDelete = async (id) => {
    const response = await deleteCake(id);
    if (response.data) {
      toast.success("Deleted!");
    }
    if (response.error) {
      toast.error(response.error.data.errors[0].message);
    }
  };

  const cakesData = [
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
    <>
      <Form />
      <Navbar title="Add ons" image={addon} />
      <section className="add-ons">
        <div className="add">
          <button onClick={handleFormOpenModal}>Add New Addon!</button>
        </div>

        <div className="cards">
          {cakesData.map((card) => (
            <div className="card" key={card.id}>
              <img
                src={deleteIcon}
                onClick={() => handleDelete(uid)}
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

export default Addon;
