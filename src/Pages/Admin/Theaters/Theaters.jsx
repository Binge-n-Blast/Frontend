import "./Theaters.scss";

//Component
import Navbar from "../../../Components/Admin/Navbar/Navbar";

//Images
import theater from "../../../Components/Admin/Sidebar/Assets/theater.png";
import img1 from "../../User/Theaters/Assets/img1.png";
import img2 from "../../User/Theaters/Assets/img2.png";

//Redux
import { useGetTheatersQuery } from "../../../Redux/Api/Admin/adminSlice";

const Theaters = () => {
  const cardsData = [
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
  const { data, error, isLoading } = useGetTheatersQuery();
  return (
    <>
      <Navbar title="Theaters" image={theater} />
      <section className="admin-theaters">
        <div className="blue-blob"></div>
        <div className="red-blob"></div>
        {isLoading ? (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="cards">
            {data && data.data.map((card, index) => {
              const {
                uid,
                theaterName,
                details,
                price,
                noOfPersons,
                extraPersonCost,
              } = card;
              return (
                <div className="card" key={uid}>
                  <div className="content">
                    <img src={img1} alt="" />
                    <h3>{theaterName}</h3>
                    <p>{details}</p>
                  </div>
                  <div className="action">
                    <h3>₹ {price}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default Theaters;
