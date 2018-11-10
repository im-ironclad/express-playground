import React, { Component } from 'react';
import reactDom from 'react-dom';

// Import app styles
import './styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main-cont">
        <h1>
          Hello world, this is the best!
        </h1>
      </div>
    )
  }
}

reactDom.render(<App />, document.getElementById('app'));