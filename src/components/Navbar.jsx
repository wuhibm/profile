import clsx from 'clsx';
import "../styles/Navbar.css"
import { NavLink, Link } from "react-router";

export default function Navbar(props) {
    return (
        <header>
            <nav className='navbar'>
                <NavLink to="/" className={clsx("nav-link", props.active === "home" && "active")}>Home</NavLink>
                <NavLink to="/projects" className={clsx("nav-link", props.active === "projects" && "active")}>Projects</NavLink>
                <NavLink to="/education" className={clsx("nav-link", props.active === "education" && "active")}>Education</NavLink>
                <a href="#" className={clsx("nav-link", props.active === "resume" && "active")}>Resume</a>
            </nav>
        </header>)
}