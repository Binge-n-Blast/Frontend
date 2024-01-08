import "./AddOns.scss";
import { toast } from "react-hot-toast";

// Images
import addOnsImg1 from "../../../../../Assets/addOnsImg1.png";
import addOnsImg2 from "../../../../../Assets/addOnsImg2.png";
import addOnsImg3 from "../../../../../Assets/addOnsImg3.png";

// Api SLices
import { useGetAddonsQuery } from "../../../../../Redux/Api/apiSlice";
import { HexToImage, separateHex } from "../../../../../Utils/HexToImage";

const AddOns = ({changeHandler,info}) => {
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
            data && data.data && data.data.map((card) => {
              const { id, uid, price, itemsName, details,imagesJsonArray } = card;
              return (
                <div className="card" key={id}>
                  {imagesJsonArray && imagesJsonArray[0]?<HexToImage hexValue={separateHex(imagesJsonArray[0].image)} />:<img src={addOnsImg1} alt="" /> }
                  <div className="content">
                    <h4>{itemsName}</h4>
                    <p>{details}</p>
                    <div className="action">
                      <p>₹ {price}</p>
                      {
                          info && info.addOns && info.addOns.id==id? <button className="button_remove" onClick={()=>{changeHandler({addOns:null})}}>remove</button>:
                          <button onClick={()=>{changeHandler({addOns:{id,price,itemsName}})}}>add</button>
                        }
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
