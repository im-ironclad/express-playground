import React, { Component } from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Import app styles
import './styles/app.scss';

// Import pages
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Import components
import Header from './components/layout/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-cont">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </BrowserRouter>
    )
  }
}

reactDom.render(<App />, document.getElementById('app'));