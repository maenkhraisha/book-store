import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Header() {
  return (
    <div className="header-container">
      <h1>Bookstore (CMS)</h1>
      <div>
        <ul className="header-list">
          <li className="header-link"><Link to="/">Books</Link></li>
          <li className="header-link"><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
