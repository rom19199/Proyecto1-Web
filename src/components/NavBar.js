import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Logo1 from '../images/Logo1.png';
import { Button } from './Button';
import './NavBar.css';

function NavBar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button,setButton] = useState(true);

    

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
       useEffect(() => {
         showButton();
       }, []);
    
      window.addEventListener('resize', showButton);

    return(
       <> 
        <nav className="navbar">
            <div className = "navbar-container">
                <Link to="/" className="navbar-logo">
                    {/* Digital360 <i className='fab fa-typo3'/> */}
                     {/* <img src = {require('../images/Digital.jpeg')}
                    alt = 'logo' />  */}
                    <img src={Logo1} width="250" alt="logo"/>
                   
                </Link>
                <div className= 'menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                            INICIO
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/Acercade' className='nav-links' onClick={closeMobileMenu}>
                        ACERCA DE
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/Servicios' className='nav-links' onClick={closeMobileMenu}>
                            SERVICIOS
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/Blog' className='nav-links' onClick={closeMobileMenu}>
                            BLOG
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/Contactenos' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Contacto
                        </Link>
                    </li>
                </ul>
                 {button && <Button buttonStyle='btn--outline'>Contacto</Button>} 
            </div>
        </nav>
        </>
    );
}
export default NavBar;