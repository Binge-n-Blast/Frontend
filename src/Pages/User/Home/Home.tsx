import "./Home.scss"
import Hero from "./Components/Hero/Hero"
import CommonSections from "./Components/CommonSections/CommonSections"

const Home = () => {
  return (
    <section className="home">
      <Hero/>
      <CommonSections/>
    </section>
  )
}

export default Home