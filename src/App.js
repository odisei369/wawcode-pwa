// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './App.css';
// Import the History component to be used below
import CardComponent from './Components/CardComponent'
import ChatComponent from "./Components/ChatComponent";

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="topheader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">Here would be date</span>
              </div>
            </nav>
          </header>
        </div>
        <section className="results--section">
          <CardComponent />
          <ChatComponent/>
        </section>
      </div>
    );
  }
}

export default App;