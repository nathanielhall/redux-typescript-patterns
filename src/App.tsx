import React, { Component } from 'react';
import './App.scss';

import Todo from './pages/todos'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Todo></Todo>


        </header>
      </div>
    );
  }
}

export default App;
