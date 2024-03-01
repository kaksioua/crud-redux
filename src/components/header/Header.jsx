import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navitle">
          <h1>Redux Crud App</h1>
        </div>
        <div className="nav-item">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-user">Add new user</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
