import "./Home.scss"
import Hero from "./Components/Hero/Hero"
import CommonSections from "./Components/CommonSections/CommonSections"
import Contact from "./Components/Contact/Contact"

const Home = () => {
  return (
    <section className="home">
      <Hero/>
      <CommonSections/>
      <Contact/>
    </section>
  )
}

export default Home