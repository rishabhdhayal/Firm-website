import React from 'react'
import './Navbar.css'
import {logo} from '../../assets/';
import { navLinks } from "../../constants";

const Navbar = () => {

  function shownav()
  {
    document.getElementById('p_nav').style.display = 'block';
  }
  function close()
  {
    document.getElementById('p_nav').style.display = 'none';
  }
  function showpage()
  {
    document.getElementById('p_nav').style.display = 'none';
  }
  return (
    
    <div className='navbar'>
      <div class="p_nav" id="p_nav">
    <div class="pnc" id="pnc" onClick={close}>&#x2A2F;</div>
        <ul className="s_nav">
            {navLinks.map((nav, index) => (
              <li key={nav.id}  onClick={showpage}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
  </div>
      <div className="nav">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="navitems">
          <ul className="list">
            {navLinks.map((nav, index) => (
              <li key={nav.id} >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        <button>D/N</button>
        </div>
            <div className='hamburger' onClick={shownav} id='hamburger'>&#x2630;</div>
      </div>
    </div>
  )
}

export default Navbar