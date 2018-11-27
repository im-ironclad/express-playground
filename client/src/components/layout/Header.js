import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// Import middleware utility
import isAuthenticated from '../../utils/isAuthenticated';

export default class Header extends Component {
  constructor(props) {
    super(props);
    
    // Non-state variables
    this.isAuthenticated = isAuthenticated();
  }
  render() {
    return (
      <header className="header">
        <nav className="auth-nav">  
            {
              this.isAuthenticated
              ? // If user is logged in
              <ul className="auth-nav__list">  
                <li className="auth-nav__list__link">
                  <Link to='logout'>
                    Logout
                  </Link>
                </li>
              </ul>
              : // If user is not logged in
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
            }
        </nav>

        <nav className="nav">
          {
            this.isAuthenticated
            ? // If user is logged in
            <ul className="nav__list">
              <li className="nav__list__link">
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className="nav__list__link">
                <Link to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
            : // If user is not logged in
            <ul className="nav__list">
              <li className="nav__list__link">
                <Link to="/">
                  Home
                </Link>
              </li>
            </ul>
          }
        </nav>
      </header>
    )
  }
}
