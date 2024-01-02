import "./AddOns.scss";
import { toast } from "react-hot-toast";

// Images
import addOnsImg1 from "../../../../../Assets/addOnsImg1.png";
import addOnsImg2 from "../../../../../Assets/addOnsImg2.png";
import addOnsImg3 from "../../../../../Assets/addOnsImg3.png";

// Api SLices
import { useGetAddonsQuery } from "../../../../../Redux/Api/apiSlice";

const AddOns = () => {
  const { data, error, isLoading } = useGetAddonsQuery();

  if (error) {
    toast("Something went wrong!");
  }

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
    <section className="addOns-container">
      <h3>Add On's</h3>
      {isLoading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="cards">
          {data && data.data.length === 0 ? (
            <h1 className="no-data">No Data!</h1>
          ) : (
            data.data.map((card) => {
              const { id, uid, price, itemsName, details } = card;
              return (
                <div className="card" key={id}>
                  <img src={addOnsImg1} alt="" />
                  <div className="content">
                    <h4>{itemsName}</h4>
                    <p>{details}</p>
                    <div className="action">
                      <p>₹ {price}</p>
                      <button>Add</button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </section>
  );
};

export default AddOns;
