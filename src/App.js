import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  name = 'David';

  list = [
      {name: 'Frank', number: 1},
      {name: 'John', number: 2},
      {name: 'Sally', number: 3},
      {name: 'Emma', number: 4}
  ];

  componentDidMount() {
    this.doGreetComponent.addEventListener('greeted', this.onGreetedEvent);
  }

  componentWillUnmount() {
    this.doGreetComponent.removeEventListener('greeted', this.onGreetedEvent);
  }

  onGreetedEvent(event) {
    alert(event.detail);
  }

  /* Notice how we're not passing in the list we created above. The <do-greet /> component also accepts an input of "stuff" which should be an array
   * of objects with a name property and a number property like the list above. React serializes (calls .toString()) complex types such as objects and arrays as strings.
   * If we wanted to be able to pass in complex objects and arrays in a React app, the input data for a web component would have to be serialized (JSON.stringify())
   * the web component would have to be set up to internally deserialize (call JSON.parse()) the input data so that it can use it. */

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>React meets Angular</h1>
            <p>That little component down at the bottom was created with Angular Elements, built as a custom Web Component and consumed by this React App!</p>
          </header>
          <do-greet name={this.name} ref={component => this.doGreetComponent = component} />
        </div>
    );
  }
}

export default App;
