import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.doGreetComponent.addEventListener('greeted', this.onGreetedEvent);
  }

  componentWillUnmount() {
    this.doGreetComponent.removeEventListener('greeted', this.onGreetedEvent);
  }

  onGreetedEvent(event) {
    alert(event.detail);
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>React meets Angular</h1>
            <p>That little component down at the bottom was created with Angular Elements, built as a custom Web Component and consumed by this React App!</p>
          </header>
          <do-greet name="David" ref={component => this.doGreetComponent = component} />
        </div>
    );
  }
}

export default App;
