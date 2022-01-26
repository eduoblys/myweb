import React from 'react';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ErrorBoundary from './components/ErrorBoundary';
import "./App.css";



class App extends React.Component {


  render() {
      return (

          <div className="bg">
            <main className="main">
            <BrowserRouter>
            <Toolbar />

              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
              </Routes>
              </BrowserRouter>
            </main>    
          </div>


    );
  }
}
export default App;
