import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import style from "./navBar.module.css"

 export default function NavBar() {
  const [ activeLink, setActiveLink ] = useState("home");
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(function(){
    function onScroll(){
      if (window.scrollY > 50 ){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } 
    window.addEventListener("scroll", onScroll);
    return window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = ( value )=>{
    
  }

  const meto = "me-auto";
  const scrolledVar = scrolled ? "scrolled" : "";
  
  return (
    <Navbar expand="lg"  className={ scrolled ? "scrolled" : "" } id ="barra"  >
      <Container className={style.nav}>
        <Navbar.Brand href="#home">Contact</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className= { `${meto} ${style.meto}`} >
            <Nav.Link href="#home" className={ activeLink === "home" ? "active navbar-link" : "navbar-link" } onclick = {()=> onUpdateActiveLink("home")}  >Home</Nav.Link>
            <Nav.Link href="#link" className={ activeLink === "home" ? "active navbar-link" : "navbar-link" } onclick = {()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#link" className={ activeLink === "home" ? "active navbar-link" : "navbar-link" } onclick = {()=> onUpdateActiveLink("projects")}>ProjectsM</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

