import "./Hero.scss";
import { useState, useEffect, ChangeEvent } from "react";
import theaterImg from "../../Assets/theaterImg.png";

const Hero = () => {
  interface TheaterHero {
    img: string;
    title: string;
    desc: string;
    price: number;
    persons: number;
  }

  const theaterData: TheaterHero = {
    img: theaterImg,
    title: "Blockbuster Bliss",
    desc: "₹1899 for 6 or less people (Rs 299 per extra person), Our theatres are equipped with 120 inch enhanced 4k Video. Powerful Dolby atoms sound system.",
    price: 1899,
    persons: 6,
  };

  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  }, []);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };
  return (
    <section className="theater-hero">
      <div className="blue-blob1"></div>
      <div className="blue-blob2"></div>

      <img src={theaterData.img} alt="" />
      <div className="content">
        <h2>{theaterData.title}</h2>
        <p>{theaterData.desc}</p>
      </div>
      <div className="detail">
        <h2>
          ₹{theaterData.price} (up to {theaterData.persons} persons)
        </h2>
      </div>
      <div className="form">
        <input
          type="date"
          placeholder="Select Date"
          name="dateInput"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <select name="slots">
          <option value="">Slots</option>
          <option value="morning">10:00 am - 12:30 pm</option>
          <option value="afternoon">1:00 pm - 3:30 pm</option>
          <option value="evening">4:00 pm - 6:30 pm</option>
          <option value="lateEvening">7:00 pm - 9:30 pm</option>
          <option value="night">10:30 pm - 1:00 am</option>
        </select>
        <select name="persons">
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
  );
};

export default Hero;
