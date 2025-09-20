import Navbar from "../components/Navbar"
import "../styles/Home.css"
import { FaGithub, FaLinkedin, FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaPython, FaSwift } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import Skill from "../components/Skill";
import pfp from "../assets/1736829147488.jpeg"




export default function Home() {

    const skills = [{
        icon: <FaHtml5 title="HTMl Logo" />,
        body: "HTML"
    },
    {
        icon: <FaCss3 title="CSS logo" />,
        body: "CSS"
    }, {
        icon: <FaJs title="JavaScript logo" />,
        body: "JavaScript"
    }, {
        icon: <FaReact title="React logo" />,
        body: "React"
    }, {
        icon: <FaJava title="Java logo" />,
        body: "Java"
    }, {
        icon: <FaPython title="Python logo" />,
        body: "Python"
    }, {
        icon: <FaSwift title="Swift logo" />,
        body: "Swift"
    }, {
        icon: <SiDjango title="Django logo" />,
        body: "Django"
    },
    {
        icon: <FaGolang title="GoLang logo" />,
        body: "GoLang"
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
                    <a className="social-link" href="https://github.com/wuhibm" target="__blank" ><FaGithub title="GitHub Logo" size="2em" /></a>
                    <a className="social-link" href="https://www.linkedin.com/in/wuhib-mezemir/" target="__blank" ><FaLinkedin title="LinkedIn Logo" size="2em" /></a>
                </section>
                <section className="profile-card">
                    <img className="profile-photo" src={pfp} alt="Profile Photo" />
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