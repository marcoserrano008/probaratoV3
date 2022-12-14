import React from 'react';
import Logo from '../assets/logo.png';
import '../styles/Navbar.css';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
const cookies = new Cookies();
// import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    

    const toogleNavbar = () => {
        window.location.href='./';
    }

    const test2 = () => { 
        let aux = document.getElementById("cerrarsesion")
        let pos = document.getElementById("iniciarsesion")
        let aux2 = document.getElementById("cerrarsesion2")
        let pos2 = document.getElementById("iniciarsesion2")
        aux.style.display="none";
        aux2.style.display="none";
        pos.style.display="flex" ;
        pos2.style.display="flex" ;
        cookies.remove('id', {path: "/"});
        cookies.remove('token', {path: "/"});
        window.location.href='./';
    }

  return (
    <div className="navbar">
        {/* <a className="text-white" href='/registrarNegocio'>fasdfsdafsdf</a> */}
        <div className="leftSide" >
            <img src={Logo}  className='logo' onClick={toogleNavbar}/>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/registrarNegocio"id="iniciarsesion">Registrar Negocio</Link>
            <Link to="/ini" id="iniciarsesion2" >Iniciar sesion</Link>
            <Link to="/registrarPromocion"id="cerrarsesion">Registrar Promocion</Link>
            <Link to="/"id="cerrarsesion2"onClick={test2}>Cerrar Sesion</Link>
            

        </div>
    </div>
  )
}
export default Navbar
