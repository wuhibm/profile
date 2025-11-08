import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {

    const projects = [{
        title: "JamJournal",
        description: "Full stack web application",
        technologies: ["Python", "Django"],
        body: "JamJournal is a full-stack web application that I developed using Django. It is a site for music reviews that uses the Spotify API to fetch music data such as the albums that are featured on the homepage and search results for albums or artists. It uses Django’s Object-Relational Modelling to store user information, their reviews, and interactions (e.g. commenting or following other users). Users can follow friends to see their reviews. I containerized this application using Docker, along with a Postgresql database and an Nginx server for static files. This allowed smooth deployment using docker compose. By making this project I strengthened my web development skills and became comfortable with using Django and Docker. I then deployed this application on AWS EC2 using an Ubuntu server and it is live at http://jamjournal.net."
    }, {
        title: "Guess the Flag",
        description: "iOS Mobile application",
        technologies: ["Swift", "SwiftUI"],
        body: "Guess The Flag is an iOS application developed using Swift, particularly SwiftUI. It makes use of SwiftUI’s Model-View-ViewModel architecture. It quizzes users on all of the flags of the world. The most challenging part about this project was getting familiar to the shift of Swift’s more declarative and functional paradigm, where I had previously stuck with more imperative, object-oriented languages like Java. I became much more familiar and comfortable with functional programming, as Swift is both a function and object-oriented language. It also deepened my understanding of the difference between value-types, such as structs (in Swift) and reference types, such as classes, which both have their place in the MVVM architecture. I also learned all the flags of the world!"
    }, {
        title: "Rentify",
        description: "Android Mobile application",
        technologies: ["Java", "Android Studio"],
        body: "Rentify is an Android application that I developed with my classmates. It facilitates the renting of items between users, kind of like a Facebook marketplace but for renting. This project was thoroughly planned out using UML diagrams, and as the group lead, I mapped out a timetable and ensured we met deliverable deadlines. The app uses a firebase database to store the listings and who has listed/rented them, as well as firebase authentication to authenticate users. This project strengthened my skills in Java and Android Studio, as well as my teamwork and leadership skills."
    }, {
        title: "Scrabble",
        description: "Java application",
        technologies: ["Java", "JavaFX"],
        body: "I implemented the popular board game, Scrabble, using Java, and JavaFX for the Graphical User Interface. This is a single player game where the user plays against the computer. The most challenging part of this project was creating an algorithm to actually play Scrabble well. It uses mathematical combinations of 5 letters, from the 7 available to scrabble players, and finds words from permutations of those 5. This turned out to be a quick and efficient algorithm that I haven’t been able to beat to this day!"
    }, {
        title: "Schedule Master",
        description: "Java application",
        technologies: ["Swift", "SwiftUI"],
        body: "Schedule Master is a scheduling application that I developed with classmates. It is for students to organize their schedules, they input due dates and how much time they estimate needing for each task, and the app takes care of the rest, providing the user with a schedule to achieve everything they’ve listed. As the team leader I planned out the project using UML and use-case Diagrams and ensured we met deadlines. I also used JUnit to comprehensively unit test our application as it was being developed."
    }
    ]

    return (<>
        <Navbar active="projects" />
        <main className="main-content">
            {projects.map(project => <ProjectCard key={project.title} {...project} >{project.body}</ProjectCard>)}
        </main>
    </>)
}