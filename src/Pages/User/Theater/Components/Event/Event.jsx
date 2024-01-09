import "./Event.scss";
import { toast } from "react-hot-toast";

// Images
import eventImg1 from "../../../../../Assets/eventImg1.png";

// Api SLices
import { useGetDecorationsQuery } from "../../../../../Redux/Api/apiSlice";
import { HexToImage, separateHex } from "../../../../../Utils/HexToImage";

const Event = ({changeHandler,info}) => {
  const { data, error, isLoading } = useGetDecorationsQuery();
// const {decoration}=info
  if (error) {
    toast("Something went wrong!");
  }

  return (
    <section className="main-container">
      <div className="blue-blob"></div>
      <div className="red-blob"></div>
      <div className="heading">
        <h2>What we offer</h2>
        <p>
          We aim to provide everything you need to enjoy your special moments.{" "}
          <br />
          Our comprehensive offerings include
        </p>
      </div>
      <section className="event-container">
        <h3>Event Decoration</h3>

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
                const { id, imagesJsonArray, price, itemsName, details } = card;
                return (
                  <div className="card" key={id}>
                  {imagesJsonArray ?<HexToImage hexValue={separateHex(imagesJsonArray.image)} />:<img src={eventImg1} alt="" /> }
                    <div className="content">
                      <h4>{itemsName}</h4>
                      <p>{details}</p>
                      <div className="action">
                        <p>₹ {price}</p>
                        {
                          info && info.decoration && info.decoration.id==id? <button className="button_remove" onClick={()=>{changeHandler({decoration:null})}}>remove</button>:
                          <button onClick={()=>{changeHandler({decoration:{id,price,itemsName}})}}>add</button>
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
    </section>
  );
};

export default Event;
