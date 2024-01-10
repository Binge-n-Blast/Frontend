import "./Hero.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

//Images
import theaterImg from "../../../../../Assets/theaterImg.png";

//Redux
import { useSelector, useDispatch } from "react-redux";

// State Slice
import {
  setDate,
  setSlot,
  setPerson,
  setTheater,
  setPrice,
} from "../../../../../Redux/Slices/User/checkoutSlice";

//Api Slice
import { useGetTheaterQuery } from "../../../../../Redux/Api/apiSlice";
import { useGetSlotByDateQuery } from "../../../../../Redux/Slices/User/apiSlice";
// import { HexToImage, separateHex } from "../../../../../Utils/HexToImage";

const Hero = ({ info }) => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetTheaterQuery(id);

  const theaterData = {
    images: [theaterImg, theaterImg, theaterImg],
  };

  const dispatch = useDispatch();
  const date = useSelector((state) => state.checkout.date);
  const slot = useSelector((state) => state.checkout.slot);
  const person = useSelector((state) => state.checkout.person);
  const theater = useSelector((state) => state.checkout.theater);
  const [booked, setBooked] = useState([]);
  const res = useGetSlotByDateQuery(date);

  useEffect(() => {
    if (res && res.data && res.data.data && res.data.data.length > 0) {
      setBooked(res.data.data);
    } else {
      setBooked([]);
    }
  }, [res]);
  // Todays date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    dispatch(setDate(formattedDate));
  }, []);
  useEffect(() => {
    if (data) {
      dispatch(
        setTheater({
          theaterName: data.data[0].theaterName,
          price: data.data[0].price,
          noOfPersons: data.data[0].noOfPersons,
          extraPersonCost: data.data[0].extraPersonCost,
        })
      );

      dispatch(setPrice(theater.price));
    }
  }, [data]);

  const isBooked = (startTime) => {
    const includesObject = booked.some((obj) => obj.startTime === startTime);
    return includesObject;
  };

  return (
    <>
      <section className="theater-hero">
        {theaterData.images.length > 1 ? (
          <img src={theaterImg} />
        ) : (
          // <Swiper
          //   loop={true}
          //   navigation={true}
          //   grabCursor={true}
          //   effect={"creative"}
          //   pagination={true}
          //   creativeEffect={{
          //     prev: {
          //       shadow: true,
          //       translate: [0, 0, -400],
          //     },
          //     next: {
          //       translate: ["100%", 0, 0],
          //     },
          //   }}
          //   modules={[Pagination, EffectCreative]}
          //   slidesPerView={1}
          //   className="carousel"
          // >
          //   {data &&
          //     data.data[0] &&
          //     data.data[0].imagesJsonArray &&
          //     data.data[0].imagesJsonArray.map((image, index) => (
          //       <SwiperSlide key={index}>
          //         {image && (
          //           <HexToImage
          //             hexValue={separateHex(image.image)}
          //             name={`image_${index}`}
          //           />
          //         )}
          //       </SwiperSlide>
          //     ))}
          // </Swiper>
          <img src={theaterImg} />
        )}
        <div className="blue-blob1"></div>
        <div className="blue-blob2"></div>

        <div className="content">
          <h2>{data && data.data[0].theaterName}</h2>
          <p>{data && data.data[0].details}</p>
        </div>
        <div className="detail">
          <h2>
            ₹{data && data.data[0].price} (up to{" "}
            {data && data.data[0].noOfPersons} persons)
          </h2>
        </div>
        <div className="form">
          <input
            type="date"
            placeholder="Select Date"
            name="dateInput"
            value={date}
            min={date}
            onChange={(event) => dispatch(setDate(event.target.value))}
          />
          {booked && booked.length > 0 ? (
            <select
              name="slots"
              onChange={(event) => dispatch(setSlot(event.target.value))}
              value={slot}
            >
              <option value="">Slots</option>
              <option
                value="10:00 am - 12:30 pm"
                disabled={isBooked(date + "T" + "10:00 am")}
              >
                10:00 am - 12:30 pm
              </option>
              <option
                value="1:00 pm - 3:30 pm"
                disabled={isBooked(date + "T" + "1:00 am")}
              >
                1:00 pm - 3:30 pm
              </option>
              <option
                value="4:00 pm - 6:30 pm"
                disabled={isBooked(date + "T" + "4:00 am")}
              >
                4:00 pm - 6:30 pm
              </option>
              <option
                value="7:00 pm - 9:30 pm"
                disabled={isBooked(date + "T" + "7:00 am")}
              >
                7:00 pm - 9:30 pm
              </option>
              <option
                value="10:30 pm - 1:00 am"
                disabled={isBooked(date + "T" + "10:30 pm")}
              >
                10:30 pm - 1:00 am
              </option>
            </select>
          ) : (
            //
            <select
              name="slots"
              onChange={(event) => dispatch(setSlot(event.target.value))}
              value={slot}
            >
              <option value="">Slots</option>
              <option value="10:00 am - 12:30 pm">10:00 am - 12:30 pm</option>
              <option value="1:00 pm - 3:30 pm">1:00 pm - 3:30 pm</option>
              <option value="4:00 pm - 6:30 pm">4:00 pm - 6:30 pm</option>
              <option value="7:00 pm - 9:30 pm">7:00 pm - 9:30 pm</option>
              <option value="10:30 pm - 1:00 am">10:30 pm - 1:00 am</option>
            </select>
          )}

          <select
            name="persons"
            onChange={(event) => dispatch(setPerson(event.target.value))}
            value={person}
          >
            <option>Number of People</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Hero;
