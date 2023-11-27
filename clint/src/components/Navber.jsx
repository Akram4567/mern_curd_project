import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    return (
<div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">CRUD</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li></li>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/registrationForm">Registration</NavLink></li>
    </ul>
  </div>
</div>



    );
};

export default Navber;