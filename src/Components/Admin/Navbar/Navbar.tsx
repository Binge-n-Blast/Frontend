import "./Navbar.scss"

interface NavbarData{
    title:string,
    image:string
}

const Navbar = ({title,image}:NavbarData) => {
  return (
    <section className="admin-navbar">
      <img src={image} alt="" />
        <h1>{title}</h1>
    </section>
  )
}

export default Navbar