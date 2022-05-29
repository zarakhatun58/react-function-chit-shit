import React from 'react';
//import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* <h1>React Admin Project</h1>     */}
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
      Members
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" exact to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/members/addMember">Add Member</Link>
      </div>
    </nav>
    </div>
  );
};

export default Header;