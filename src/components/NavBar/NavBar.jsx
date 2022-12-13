import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_react.png"
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
        <Navbar.Brand>
        <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        </Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink to="/categoria/Bikinis" id="navLink">Bikinis</NavLink>
            <NavLink to="/categoria/Enteriza"  id="navLink">Enteriza</NavLink>
            <NavLink to="/contacto"  id="navLink">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Nav id="#carrito" >
          <Link to="/carritoo">
          <CartWidget/>
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

      </Container>
    </Navbar>
  )
}

export default NavBar 
