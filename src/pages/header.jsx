import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../assets/logo - white.png"
import "./header.scss";

import { Typography, AppBar, Toolbar } from '@material-ui/core';


const Header = () => {
    return (
        <AppBar>
            <Toolbar className="header">
                <div className="logo">
                    <img src={Logo} alt="logo-img" className="logo-img" />
                    <Typography className="logo-name" variant="h6" noWrap>Denmercs Folio</Typography>
                </div>
            <div className="nav">
                <Link to="/" className="nav-item"> Home </Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/design" className="nav-item">Design</Link>
                <Link to="/projects" className="nav-item">Projects</Link>
            </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;