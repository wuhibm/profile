import Navbar from "../components/Navbar"
import "../styles/Home.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function Home() {
    return (
        <>
            <Navbar active="home" />
            <main className="main-content">
                <section className="profile-header">
                    <h1>Hi! I'm Wuhib</h1>
                </section>
                <section className="socials">
                    <a className="social-link" href="#" ><FaGithub size="2em" /></a>
                    <a className="social-link" href="#" ><FaLinkedin size="2em" /></a>
                </section>
                <section className="profile-card">
                    <img className="profile-photo" src="src/assets/1736829147488.jpeg" alt="Profile Photo" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec laoreet sapien, nec ultrices mauris. Aliquam posuere purus ut sem feugiat, facilisis fermentum est vulputate. Curabitur aliquam dolor in dolor feugiat iaculis. Fusce dignissim ultrices massa a fringilla. Phasellus efficitur, lectus sed congue dictum, augue mauris fringilla elit, eget condimentum ex turpis ac libero. Sed scelerisque euismod mi et ornare. Aliquam mi purus, euismod quis consequat ac, auctor ut purus. Duis venenatis molestie ipsum, sit amet consequat libero sagittis et. Nullam rutrum viverra purus ut rhoncus. Mauris nec massa congue ante consectetur molestie non nec dolor. Donec libero turpis, eleifend.
                    </p>
                </section>
            </main>
        </>
    )
}