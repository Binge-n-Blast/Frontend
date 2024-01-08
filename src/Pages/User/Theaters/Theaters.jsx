import "./Theaters.scss";
import { Link } from "react-router-dom";

// Images
import img1 from "../../../Assets/userTheaterImg1.png";

import { useGetTheatersQuery } from "../../../Redux/Api/apiSlice";
import {HexToImage,separateHex} from "../../../Utils/HexToImage";

const Theaters = () => {
  const { data, error, isLoading } = useGetTheatersQuery();

  return (
    <section className="theaters">
      <div className="blue-blob1"></div>
      <div className="blue-blob2"></div>
      <div className="red-blob"></div>
      <div className="content">
        <h2>
          We’ll make your next <br />
          celebration very special!
        </h2>
        <p>
          BingeDelight welcomes you for an extraordinary private theatre
          experience with personalized decor. <br /> Our exclusive premium
          private theatres feature enhanced 4K resolution with DOLBY atoms sound
          system.
        </p>
      </div>

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
                data.data.map((card) => {
                  const {  uid, theaterName, details, price,imagesJsonArray} = card;
                  return (
                    <div className="card" key={uid}>
                      <div className="content">
                        {/* <img src={img1} alt="" /> */}
                        {imagesJsonArray && imagesJsonArray[0]?<HexToImage hexValue={separateHex(imagesJsonArray[0].image)} />:<img src={img1} alt="" /> }
                        
                        <h3>{theaterName}</h3>
                        <p>{details}</p>
                      </div>
                      <div className="action">
                        <h3>₹ {price}</h3>
                        <Link to={`/theater/${uid}`}>Book now!</Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Theaters;
