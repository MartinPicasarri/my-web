import "./Navbar.css";
import { Link } from "react-scroll";
import React, { useState, useEffect } from 'react';

function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            {isMobile && (
                <button className="hamburger-menu" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            )}
            <ul className={`navbar-links ${isMobile && isOpen ? 'active' : ''}`}>
                <li><Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>INICIO</Link></li>
                <li><Link to="info" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>SOBRE MI</Link></li>
                <li><Link to="proyects" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>PROYECTOS</Link></li>
                <li><Link to="skill" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>HABILIDADES</Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>CONTACTO</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;