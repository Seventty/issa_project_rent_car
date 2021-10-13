import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Models from './pages/Models';
import Gas from './pages/Gas';
import Gestion from './pages/Gestion';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/brands' component={Brands} />
          <Route path='/models' component={Models} />
          <Route path='/gas' component={Gas} />
          <Route path='/gestion' component={Gestion} />
        </Switch>
      </Router>
    </>
  );
}

export default App;