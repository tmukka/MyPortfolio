import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './../DSC_2197.jpg';
import github from './../github.svg';
import linkedin from './../linkedin-logo.svg';
import { NavLink } from 'react-router-dom';

const Sidenav = () => {
    var divStyle = {
        marginTop: '80px',
        marginBottom: '50px'
    }
    return (
        <div>
            <Drawer>
                <h1>PORTFOLIO</h1>
                <div style={divStyle}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <NavLink to = "/Home"><MenuItem>Home</MenuItem></NavLink>
                <NavLink to = "/Code"><MenuItem>Code</MenuItem></NavLink>
                <NavLink to = "/Work"><MenuItem>Work</MenuItem></NavLink>
                <NavLink to = "/Intrests"><MenuItem>Intrests</MenuItem></NavLink>
                <div>
                    <ul className = "list">
                    <li>
                        <a href="" className="nav-link">
                            <i className="fa fa-envelope icon fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/tmukka" className="nav-link" target="_blank">
                            <i className="fa fa-github icon fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tharunmukka1/" className="nav-link" target="_blank">
                            <i className="fa fa-linkedin-square icon fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" className="nav-link" target="_blank">
                            <i className="fa fa-github icon fa-2x"></i>
                        </a>
                    </li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
}

export default Sidenav;