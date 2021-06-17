import React from 'react';
import Logo from '../img/imgclima.png'
import {Link, NavLink} from 'react-router-dom';


function Nav() {
  return (
    // eslint-disable-next-line react/style-prop-object
    <nav className="navbar navbar-light" style={{backgroundColor: '#465B73'}}>
      <Link to='/'>
        <span style={{color: 'white'}} className="navbar-brand">
          <img id="logoW" src={Logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
          Weather App
        </span>
      </Link>
      <NavLink to='/about' activeStyle={{fontWeight: "bold", background: 'gray', textDecoration: 'none'}} style={{textDecoration: 'none'}}>
        <span className='aboutLink'>Acerca de</span>
      </NavLink>
    </nav>
  );
}

export default Nav;
