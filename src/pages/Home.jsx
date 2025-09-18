import Navbar from "../components/Navbar"
import "../styles/Home.css"
import { FaGithub, FaLinkedin, FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaPython, FaSwift } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import Skill from "../components/Skill";




export default function Home() {

    const skills = [{
        icon: <FaHtml5 />,
        body: "HTML"
    },
    {
        icon: <FaCss3 />,
        body: "CSS"
    }, {
        icon: <FaJs />,
        body: "JavaScript"
    }, {
        icon: <FaReact />,
        body: "React"
    }, {
        icon: <FaJava />,
        body: "Java"
    }, {
        icon: <FaPython />,
        body: "Python"
    }, {
        icon: <FaSwift />,
        body: "Swift"
    }, {
        icon: <SiDjango />,
        body: "Django"
    },
    ]

    return (
        <>
            <Navbar active="home" />
            <main className="main-content">
                <section className="profile-header">
                    <h1 className="profile-title">Hi! I'm Wuhib</h1>
                </section>
                <section className="socials">
                    <a className="social-link" href="https://github.com/wuhibm" target="__blank" ><FaGithub size="2em" /></a>
                    <a className="social-link" href="https://www.linkedin.com/in/wuhib-mezemir/" target="__blank" ><FaLinkedin size="2em" /></a>
                </section>
                <section className="profile-card">
                    <img className="profile-photo" src="src/assets/1736829147488.jpeg" alt="Profile Photo" />
                    <p className="profile-text">
                        I am a third-year Computer Science student at the University of Ottawa. I am a passionate software developer particularly interested in web and mobile development. I enjoy creating responsive, well designed, accessible, and innovative applications that challenge me. I am committed to lifelong learning, which is what drove me to pursue Computer Science, a rapidly evolving field that allows me to consistently grow my skills.                     </p>
                </section>
                <h2>Skills:</h2>
                <section className="skills">
                    {skills.map(skill => <Skill key={skill.body} icon={skill.icon}>{skill.body}</Skill>)}
                </section>
            </main>
        </>
    )
}