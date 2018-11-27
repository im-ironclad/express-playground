import React, { Component } from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import other needed things
import PrivateRoute from './components/PrivateRoute';

// Import app styles
import './styles/app.scss';

// Import pages
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';

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
          <Switch>
            <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

reactDom.render(<App />, document.getElementById('app'));