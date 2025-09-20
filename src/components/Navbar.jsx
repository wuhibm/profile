import "../styles/Navbar.css"
import { NavLink } from "react-router";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Resume.pdf"


export default function Navbar(props) {
    return (
        <header>
            <nav className='navbar'>
                <NavLink to="/" className={props.active === "home" ? "active" : "nav-link"}>Home</NavLink>
                <NavLink to="/projects" className={props.active === "projects" ? "active" : "nav-link"}>Projects</NavLink>
                <NavLink to="/education" className={props.active === "education" ? "active" : "nav-link"}>Education</NavLink>
                <a href={resume} className="nav-link" download={true}> <FaDownload title='Download Icon' /> Resume</a>
            </nav>
        </header>)
}