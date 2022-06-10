import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
 return( <div>
<h1>Bookstore (CMS)</h1>
  <div>
    <ul>
      <li><Link to="/books">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </div>
 </div>)
}

export default Header;
