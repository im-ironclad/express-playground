import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list__link">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="nav__list__link">
            <Link to='login'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
