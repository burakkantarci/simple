import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './layouts/Home';
import About from './layouts/About';
import Projects from './layouts/Projects';
import Footer from './components/Footer';

import './style/global.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about"  component={About}></Route>
        <Route exact path="/projects"  component={Projects}></Route>
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
