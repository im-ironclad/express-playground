import React, { Component } from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Import app styles
import './styles/app.scss';

// Import pages
import Home from './pages/Home';
import Login from './pages/auth/Login';

// Import components
import Navbar from './components/layout/Navbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-cont">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}

reactDom.render(<App />, document.getElementById('app'));