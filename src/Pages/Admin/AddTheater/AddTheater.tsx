import "./AddTheater.scss";
import Navbar from "../../../Components/Admin/Navbar/Navbar";

// Images
import store from "../../../Components/Admin/Sidebar/Assets/store.png"

const AddTheater = () => {
  return (
      <>
      <Navbar title="Add Theater" image={store}/>
      <section className="add-theaters"></section>
      </>
  );
};

export default AddTheater;
