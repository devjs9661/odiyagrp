import React, { useState } from 'react';
import '../style/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import logo from "../symbol.png"

const NavBar = ({ menuItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubMenuToggle = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const history = useHistory();
  const navigateToLogin = () => history.push('/login');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" width={120} height={70} />

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li 
            key={index} 
            className="navbar-item">
              <a href={item.link} 
              className="navbar-links" 
              onClick={() => item.subMenu && handleSubMenuToggle(index)}
              onMouseEnter={() => item.subMenu && handleSubMenuToggle(index)}>
                {item.name}
              </a>
              {item.subMenu && (
                <ul className={`navbar-submenu ${openSubMenuIndex === index ? 'open' : ''}`}>
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="navbar-submenu-item">
                      <a href={subItem.link} 
                      className="navbar-submenu-links">{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          
        </ul>
        
        <div className="navbar-mobile-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;