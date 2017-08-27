import React, { Component } from 'react';
import Login from './ui/form/login'
import {Provider} from 'react-redux';
import store from './state/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store} >
          <Login />
        </Provider>
      </div>
    );
  }
}

export default App;
