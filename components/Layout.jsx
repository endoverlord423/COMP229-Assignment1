//COMP229-Assignment1, ELijah Stuwe, 301421199, September 19 2025

import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../src/assets/endo new pfp.png"

export default function Layout() {
    return (
        <>
        <h1>My Portfolio</h1>
        <nav>
            <img src={Img1} alt="Logo" width={30}/> &nbsp;
            <Link to="/">Home</Link> | <Link to="/About">About</Link> 
            &nbsp;| <Link to="/Project">Projects</Link> | <Link to="/Service">Services</Link>
            &nbsp;| <Link to="/Contact">Contact</Link>
        </nav>
            <br/>
        <hr />
        </>
    );
}