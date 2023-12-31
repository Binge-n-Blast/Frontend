import "./Theater.scss";

// Components
import AddOns from "./Components/AddOns/AddOns";
import Cakes from "./Components/Cakes/Cakes";
import Checkout from "./Components/Checkout/Checkout";
import Event from "./Components/Event/Event";
import Hero from "./Components/Hero/Hero";

const Theater = () => {
  return (
    <section className="theater">
      <Hero />
       <Checkout />
     <Event />
      <Cakes />
      <AddOns />
    </section>
  );
};

export default Theater;
