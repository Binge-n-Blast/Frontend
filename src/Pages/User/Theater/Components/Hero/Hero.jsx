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
} from "../../../../../Redux/Slices/User/State/checkoutSlice";

//Api Slice
import { useGetTheaterQuery } from "../../../../../Redux/Slices/Admin/Api/apiSlice";
import {
  useGetSlotsQuery,
  useGetBookedSlotsQuery,
} from "../../../../../Redux/Slices/User/Api/apiSlice";

// Hex to Image
import {
  SingleHexToImage,
  separateHex,
} from "../../../../../Utils/SingleHexToImage";

const Hero = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const date = useSelector((state) => state.checkout.date);
  const slot = useSelector((state) => state.checkout.slot);
  const person = useSelector((state) => state.checkout.person);
  const theater = useSelector((state) => state.checkout.theater);

  const { data: theaterData, error, isLoading } = useGetTheaterQuery(id);
  const { data: slots } = useGetSlotsQuery();
  const { data: bookedSlots } = useGetBookedSlotsQuery(date);

  const [booked, setBooked] = useState([]);

  // Get Booked Slots
  useEffect(() => {
    if (bookedSlots && slots) {
      const bookedData = slots.data.filter((slot) =>
        bookedSlots.data.some(
          (bookedSlot) => slot.slotId === bookedSlot.timingSlotId
        )
      );
      setBooked(bookedData);
    }
  }, [bookedSlots, slots]);


  // Todays date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    dispatch(setDate(formattedDate));
  }, []);

  useEffect(() => {
    if (theaterData) {
      dispatch(
        setTheater({
          theaterName: theaterData.data[0].theaterName,
          price: theaterData.data[0].price,
          noOfPersons: theaterData.data[0].noOfPersons,
          extraPersonCost: theaterData.data[0].extraPersonCost,
        })
      );

      dispatch(setPrice(theater.price));
    }
  }, [theaterData]);

  const handleSlotSelection = (event) => {
    const selectedSlotId = event.target.value;
    const selectedSlotObject = slots.data.find(
      (slot) => slot.timing === selectedSlotId
    );

    dispatch(setSlot(selectedSlotObject));
  };
  return (
    <>
      <section className="theater-hero">
        {/* {theaterData.images.length > 1 ? (
          <Swiper
            loop={true}
            navigation={true}
            grabCursor={true}
            effect={"creative"}
            pagination={true}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[Pagination, EffectCreative]}
            slidesPerView={1}
            className="carousel"
          >
            {data &&
              data.data[0] &&
              data.data[0].imagesJsonArray &&
              data.data[0].imagesJsonArray.map((image, index) => (
                <SwiperSlide key={index}>
                  {image && (
                    <SingleHexToImage
                      hexValue={separateHex(image.image)}
                      name={`image_${index}`}
                    />
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
        ) : ( */}
        <img src={theaterImg} />
        {/* )} */}
        <div className="blue-blob1"></div>
        <div className="blue-blob2"></div>

        <div className="content">
          <h2>{theaterData && theaterData.data[0].theaterName}</h2>
          <p>{theaterData && theaterData.data[0].details}</p>
        </div>
        <div className="detail">
          <h2>
            ₹{theaterData && theaterData.data[0].price} (up to{" "}
            {theaterData && theaterData.data[0].noOfPersons} persons)
          </h2>
        </div>
        <div className="form">
          <input
            type="date"
            placeholder="Select Date"
            name="dateInput"
            value={date}
            onChange={(event) => dispatch(setDate(event.target.value))}
          />

          <select
            name="slots"
            value={slot && slot.timing}
            onChange={handleSlotSelection}
          >
            <option value="">Slots</option>
            {slots &&
              slots.data.map((slot) => {
                return (
                  <option
                    key={slot.slotId}
                    value={slot.timing}
                    disabled={
                      booked.length > 0 &&
                      booked.some(
                        (bookedSlot) => bookedSlot.slotId === slot.slotId
                      )
                    }
                  >
                    {slot.timing}
                  </option>
                );
              })}
          </select>

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
