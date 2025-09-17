import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {

    const projects = [{
        title: "JamJornal",
        description: "Full stack web application",
        technologies: ["React", "Django"]
    }, {
        title: "Guess the Flag",
        description: "Mobile iOS application",
        technologies: ["Swift", "SwiftUI"]
    }, {
        title: "Scrabble",
        description: "Java application",
        technologies: ["Java", "JavaFX"]
    }]

    return (<>
        <Navbar active="projects" />
        <main className="main-content">
            {projects.map(project => <ProjectCard key={project.title} {...project} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas elementum sem sed aliquam. Aenean turpis arcu, aliquet vitae hendrerit a, pretium in dui. Nam tortor justo, vulputate vel rutrum dapibus, pulvinar nec magna. Cras diam metus, convallis in eros in, porttitor commodo orci. Nullam nec tempus mi, in egestas leo. Aenean ac magna at diam sollicitudin efficitur. Phasellus id nisl bibendum, varius mauris ac, eleifend quam. Donec sit amet dapibus risus, eu viverra ipsum. Aliquam erat volutpat. Quisque molestie neque a eros aliquet scelerisque. Donec dictum et orci quis varius. Donec venenatis massa cursus turpis ultrices, sed scelerisque arcu.</ProjectCard>)}
        </main>
    </>)
}