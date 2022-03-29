import React from 'react';
import { Link } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink.js';
import './index.css'

const Header = () => {
    return (
        <div>
            <h1> Welcome to our awosome Routing  </h1>
            <CustomLink to="/Home">Home </CustomLink>
            <Link to="/posts">Posts</Link>
        <CustomLink to="/Freinds"> friends</CustomLink>
        <CustomLink to="/about"> About</CustomLink>
        <CustomLink to="/Menu"> Menu</CustomLink>
       


        </div>
    );
};

export default Header;