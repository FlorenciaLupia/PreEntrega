import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_react.png"
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const categories = [
  {id:"12", names:"Bikinis", path:"Bikinis"},
  {id:"13", names:"Enteriza", path:"Enteriza"}
]

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
            {categories.map(({id, names, path}) => 
                                        <NavLink 
                                              key={id}
                                              to={`/categoria/${path}`}
                                              id="navLink">

                                          {`${names}`}

                                         </NavLink>) 
            }
            <NavLink to="/contact"  id="navLink">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Link to="/cart">
          <CartWidget/>
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

      </Container>
    </Navbar>
  )
}

export default NavBar 
