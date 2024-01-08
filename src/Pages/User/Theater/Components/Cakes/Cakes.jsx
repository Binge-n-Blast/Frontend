import "./Cakes.scss";
import { toast } from "react-hot-toast";

// Images
import cakesImg1 from "../../../../../Assets/cakesImg1.png";

// Api Slices
import { useGetCakesQuery } from "../../../../../Redux/Api/apiSlice";
import { HexToImage, separateHex } from "../../../../../Utils/HexToImage";

const Cakes = ({changeHandler,info}) => {
  const { data, error, isLoading } = useGetCakesQuery();

  if (error) {
    toast("Something went wrong!");
  }



  return (
    <section className="cakes-container">
      <h3>Cakes</h3>
      {isLoading && !data ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="cards">
          {data && data.data.length === 0 ? (
            <h1 className="no-data">No Data!</h1>
          ) : (
            data.data.map((card) => {
              const { id, uid, price, itemsName, details,imagesJsonArray } = card;
              return (
                <div className="card" key={id}>
                  {imagesJsonArray && imagesJsonArray[0]?<HexToImage hexValue={separateHex(imagesJsonArray[0].image)} />:<img src={cakesImg1} alt="" /> }
                  <div className="content">
                    <h4>{itemsName}</h4>
                    <p>{details}</p>
                    <div className="action">
                      <p>₹ {price}</p>
                      {
                          info && info.cake && info.cake.id==id? <button className="button_remove" onClick={()=>{changeHandler({cake:null})}}>remove</button>:
                          <button onClick={()=>{changeHandler({cake:{id,price,itemsName}})}}>add</button>
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

export default Cakes;
