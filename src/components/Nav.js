import React from "react";
import {Link,NavLink} from 'react-router-dom';
import './Nav.scss';
const NavBar = ()=>{
    return (
        <nav className="navBar" >
           <p className="title"  >
            Hritik's Blog
           </p>
           <div className="links"  >
             <NavLink exact activeClassName="active"  className="link" to="/">Home</NavLink>
             {/* <NavLink exact activeClassName="active"  className="link" to="/create-blog">New Blog</NavLink> */}
           </div>
        </nav>
    )
}

export default NavBar;