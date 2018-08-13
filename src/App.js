import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Nav from './components/Nav/Nav';
import routes from './routes';
import store from './ducks/store';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  render() {
    return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          {/* {this.props.location ? null : } */}
          <Nav />
          {routes}
        </div>
      </HashRouter>
    </Provider>
    );
  }
}

export default App;
