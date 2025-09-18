import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {

    const projects = [{
        title: "JamJornal",
        description: "Full stack web application",
        technologies: ["React", "Django"],
        body: "JamJournal is a full-stack web application that I developed Django. It is a site for music reviews that uses the Spotify API to fetch albums that are featured on the homepage, and to search for albums. It uses Django’s Object-Relational Modelling to store user information, as well as their reviews. Users are also able to follow friends and see their reviews. By making this project I strengthened my web development skills and became comfortable with using Django."
    }, {
        title: "Guess the Flag",
        description: "Mobile iOS application",
        technologies: ["Swift", "SwiftUI"],
        body: "Guess The Flag is an iOS application developed using Swift, particularly SwiftUI. It makes use of SwiftUI’s Model-View-ViewModel architecture. It quizzes users on all of the flags of the world. In creating this project, I became more familiar with functional programming, as Swift is both a function and object-oriented language. It also deepened my understanding of the difference between value-types, such as structs (in Swift) and reference types, such as classes. "
    }, {
        title: "Scrabble",
        description: "Java application",
        technologies: ["Java", "JavaFX"],
        body: "I implemented the popular board game, Scrabble, using Java, and JavaFX for the Graphical User Interface. This is a single player game where the user plays against the computer. The most challenging part of this project was creating an algorithm to actually play Scrabble well. It uses mathematical combinations of 5 letters, from the 7 available to scrabble players, and finds words from permutations of those 5. This turned out to be a quick and efficient algorithm that I haven’t been able to beat to this day!"
    }]

    return (<>
        <Navbar active="projects" />
        <main className="main-content">
            {projects.map(project => <ProjectCard key={project.title} {...project} >{project.body}</ProjectCard>)}
        </main>
    </>)
}