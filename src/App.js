import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Work from './components/Work';
import Intrests from './components/Intrests';
import Code from './components/Code';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="App">
            <Sidenav />
            <Route exact path='/MyPortfolio' component={Home} />
            <Route path='/Home' component={Home} />
            <Route exact path='/' component={Home} />
            <Route path='/Work' component={Work} />
            <Route path='/Intrests' component={Intrests} />
            <Route path='/Code' component={Code} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
