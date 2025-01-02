import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="mega">
      <h1>For Product Store</h1>

      <Link to={"/"}>Product Store 🫙</Link>
      <Link to={"/create"}>
      <button className="button">
        ➕
      </button>
      </Link>
    
    </div>
  )
}

export default Navbar
