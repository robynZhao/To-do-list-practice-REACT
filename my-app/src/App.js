import React, {Component} from 'react';
import './App.css';

class App extends Component {
    // introduce state into App class
    // giving state an empty array to hold all to-dos,
    // giving an empty string to hold an individual to-do.
    constructor(props) {
        super(props);
        this.state={
            todos: [{
                //task: '',
                //id: '',
                //completed: false
            }],
            todo: ''
        }
    }
  render() {
      return (
          <div className="App">Toto list practice</div>);
  }
}

export default App;
