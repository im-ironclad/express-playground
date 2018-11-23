import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="auth-nav">
          <ul className="auth-nav__list">            
            <li className="auth-nav__list__link">
              <Link to='login'>
                Login
              </Link>
            </li>
            <li className="auth-nav__list__link">
              <Link to='register'>
                Register
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list__link">
              <Link to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
