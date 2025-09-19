import "../styles/Navbar.css"
import { NavLink } from "react-router";
import { FaDownload } from "react-icons/fa";


export default function Navbar(props) {
    return (
        <header>
            <nav className='navbar'>
                <NavLink to="/" className={props.active === "home" ? "active" : "nav-link"}>Home</NavLink>
                <NavLink to="/projects" className={props.active === "projects" ? "active" : "nav-link"}>Projects</NavLink>
                <NavLink to="/education" className={props.active === "education" ? "active" : "nav-link"}>Education</NavLink>
                <a href="src/assets/Resume.pdf" className="nav-link" download={true}> <FaDownload title='Download Icon' /> Resume</a>
            </nav>
        </header>)
}