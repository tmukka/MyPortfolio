import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './DSC_2197.jpg';
import github from './github.svg';
import linkedin from './linkedin-logo.svg';

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
                <MenuItem>Home</MenuItem>
                <MenuItem>Work</MenuItem>
                <MenuItem>Intrests</MenuItem>
                <MenuItem>About</MenuItem>
                <div>
                    <ul className = "list">
                    <li>
                        <a href="" className="nav-link">
                            <i className="fa fa-envelope icon fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" className="nav-link" target="_blank">
                            <i className="fa fa-github icon fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" className="nav-link" target="_blank">
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
            <h1>Hi, I am Mukka Tharun</h1>
        </div>
    );
}

export default Sidenav;