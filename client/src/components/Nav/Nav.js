import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">    
    <a className="navbar-brand" href="/">
      nyt react
    </a>
    <div className="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link btn btn-outline-success mr-sm-4" href="/articles/saved">saved articles</a>
        </li>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </ul>
    </div>
  </nav>
);

export default Nav;
