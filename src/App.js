import React, { Component } from 'react';
import Calculator from './components/calculator';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Calculator />
        </Provider>
      </div>
    );
  }
}

export default App;
