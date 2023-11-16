import './Navbar.css'
import Portfolio from '../../pages/Portfolio/Portfolio';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import upArrow from '../../assets/icons/up-arrow.png'


function Navbar() {

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);




  return (
    <nav class="navbar navbar-expand-lg m-5 navbar-dark fixed-top fs-2" >
      <Link
              as={Link}
              to="/"
              onClick={() => updateExpanded(false)}
            >
              GP
            </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav gap-5">
          <li class="nav-item active">
            <Link
              as={Link}
              to="/"
              onClick={() => updateExpanded(false)}
            >
              Home
            </Link>
            <p className='upArrowNavbar'><img src={upArrow} alt='...'/></p>
          </li>
          <li class="nav-item">
            <Link
              as={Link}
              to="/portfolio"
              onClick={() => updateExpanded(false)}
            >
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link
              as={Link}
              to="/contacts"
              onClick={() => updateExpanded(false)}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}




export default Navbar;