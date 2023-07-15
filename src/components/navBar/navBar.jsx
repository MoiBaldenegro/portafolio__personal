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
    const onScroll = () => {
      if (window.scrollY > 50 ){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } 
    window.addEventListener("scroll", onScroll);
    return window.removeEventListener("scroll", onScroll());
  }, []);

  const onUpdateActiveLink = ( value )=>{
    setActiveLink(value)
    
  }
  const scrolledVar = scrolled ? `${style.scrolled}` : "";
  const active = activeLink === "home" ? `${style.active} ${style.navbarlink}` : `${style.navbarlink}`;
  
  
  return (
    <Navbar expand="lg"  className={scrolledVar} id ="barra"  >
      <Container className={ `${style.nav} ${scrolledVar}`}>
        <Navbar.Brand className={ style.contactButton } href="#home">Contact</Navbar.Brand>
        <Navbar.Toggle className={scrolledVar} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className= {style.containerLinks} >
            <Nav.Link href="#home" className={ `${active} ${style.navLinks}`} onClick = {()=> onUpdateActiveLink("home")}  >Home</Nav.Link>
            <Nav.Link href="#link" className={ `${active} ${style.navLinks}`} onClick = {()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#link" className={ `${active} ${style.navLinks}`} onClick = {()=> onUpdateActiveLink("projects")}>ProjectsM</Nav.Link>
           
    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

