import "./Theaters.scss";

import Navbar from "../../../Components/Admin/Navbar/Navbar";

import theater from "../../../Components/Admin/Sidebar/Assets/theater.png"


const Theaters = () => {
  return (
    <>
    <Navbar title="Theaters" image={theater}/>
    <section className="admin-theaters"></section>
    </>
  );
};

export default Theaters;
