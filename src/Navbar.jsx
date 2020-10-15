import React from 'react';

const NavBar = ({totalCounters}) => {
  return (<nav className="navbar navbar-light text-white bg-dark">
       ShopApp <span className="badge badge-pill badge-warning">{totalCounters}</span>
      </nav>
    )
}


export default NavBar
