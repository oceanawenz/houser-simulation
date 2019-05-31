import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <nav>
            <div><Header/></div>
            <div>
              <Link to='/' className='links'>Dashboard</Link>
              <Link to='/wizard' className='links'>Wizard</Link>
            </div>
          </nav>
          {routes}
          </div>
      </HashRouter>
    );

  }

}


