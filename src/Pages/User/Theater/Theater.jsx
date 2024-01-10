import "./Theater.scss";

// Components
import AddOns from "./Components/AddOns/AddOns";
import Cakes from "./Components/Cakes/Cakes";
import Checkout from "./Components/Checkout/Checkout";
import Event from "./Components/Event/Event";
import Hero from "./Components/Hero/Hero";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Theater = () => {
  const [data,setData]=useState(null)
  const changeHandler=(props)=>{
setData({...data,...props})
  }

  const {id}=useParams()

  return (
    <section className="theater">
      <Hero info={data}/>
      <Checkout info={data} theaterUid={id}/>
      <Event changeHandler={changeHandler} info={data}/>
      <Cakes changeHandler={changeHandler} info={data}/>
      <AddOns changeHandler={changeHandler} info={data}/>
    </section>
  );
};

export default Theater;
