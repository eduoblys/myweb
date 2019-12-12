import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './components/Home';
import About from './components/About';

import "./App.css";

import desktopImage from './components/background_pic.jpg';
import mobileImage from './components/background_pic.jpg';

const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

class App extends React.Component {


  render() {
      return (
      <Router>
        <div className="bg">
          <Toolbar />
          <main className="main">
            <Route exact path="/myweb" component={Home} />
            <Route exact path="/about" component={About} />
          </main>    
        </div>
      </Router>
    );
  }
}
export default App;
