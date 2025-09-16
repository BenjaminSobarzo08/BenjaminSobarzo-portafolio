 import '../styles/components/nav.css'
 import Overlay from './overlay';
 import { useState } from 'react';
const Navbar = ()=>{
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

 return(
    <>
    <nav>
        <div className="Perfil">
            <img src="/Perfil benja.png" alt="perfil" />
        </div>
        {!open && (
          <div className="hamburger" onClick={toggleMenu}>
          <img src="/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="menu" />
        </div>
        )}
        

        <ul className='menu'>
        <a className='linkNav' href="/">Inicio</a>
        <a className='linkNav' href="/about">Sobre mi</a>
        <a className='linkNav' href="/proyectos">Proyectos</a>
        </ul>
    </nav>
    {open && (
      <Overlay children={
        <div className="sidebar">
        <ul>
        <a  href="/">Inicio</a>
        <a  href="/about">Sobre mi</a>
        <a  href="/proyectos">Proyectos</a>
        </ul>
        </div>
      } toggleFunction={closeMenu}/>
    )}
    </>
 )
}

export default Navbar