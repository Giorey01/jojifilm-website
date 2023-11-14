import './Navbar.css'
import Portfolio from '../../pages/Portfolio/Portfolio';
import { Link } from "react-router-dom";
import React, { useState } from "react";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";



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
      <a class="navbar-brand" href="#">GP</a>
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