import * as React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink className='navbar-brand' exact to='/' >Home</NavLink>
      <NavLink className='nav-item nav-link' exact to='/new' >New Article</NavLink>
    </nav>
  );
};

export default Header;
