import AddOns from "./Components/AddOns/AddOns"
import Cakes from "./Components/Cakes/Cakes"
import Event from "./Components/Event/Event"
import Hero from "./Components/Hero/Hero"
import "./Theater.scss"

const Theater = () => {
  return (
    <section className="theater">
      <Hero/>
      <Event/>
      <Cakes/>
      <AddOns/>
    </section>
  )
}

export default Theater