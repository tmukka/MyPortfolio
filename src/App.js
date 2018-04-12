import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Work from './components/About';
import Intrests from './components/Intrests';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="App">
            <Sidenav />
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
            <Route path='/Work' component={Work} />
            <Route path='/Intrests' component={Intrests} />
            <Route path='/About' component={About} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
