import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">    
    <a className="navbar-brand" href="/">
      nyt react
    </a>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link btn btn-outline-primary ml-5" href="/articles/saved">saved articles</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
