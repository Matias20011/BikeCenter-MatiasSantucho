import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
        <Link to={"/"}>
            <img className="logo" src="./img/logo.png" alt="logo BikeCenter" />
        </Link>
        <nav>
            <ul>
                <li>
                  <NavLink activeClassName="active" className="miBtn"  to={`/categoria/2`}> MOUNTAIN BIKE</NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" className="miBtn"  to={`/categoria/3`}> ACCESORIOS </NavLink>
                </li>

            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar