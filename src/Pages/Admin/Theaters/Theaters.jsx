import "./Theaters.scss";

//Component
import Navbar from "../../../Components/Admin/Navbar/Navbar";

//Images
import theater from "../../../Components/Admin/Sidebar/Assets/theater.png";
import img1 from "../../User/Theaters/Assets/img1.png";

//Redux
import { useGetTheatersQuery } from "../../../Redux/Api/Admin/adminApiSlice";

const Theaters = () => {
  const { data, error, isLoading } = useGetTheatersQuery();
  return (
    <>
      <Navbar title="Theaters" image={theater} />
      <section className="admin-theaters">
        <div className="blue-blob"></div>
        <div className="red-blob"></div>
        {data && data.data.length === 0 ? (
          <h1 className="no-data">No data!</h1>
        ) : (
          <>
            {isLoading ? (
              <div className="loading">
                <h1>Loading...</h1>
              </div>
            ) : (
              <div className="cards">
                {data &&
                  data.data.map((card, index) => {
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
          </>
        )}
      </section>
    </>
  );
};

export default Theaters;
