import "../styles/Card.css"
import List from "./List"

export default function ProjectCard(props) {
    return (<section className="card">
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">{props.description}</h2>
        <p className="body-text">{props.children}</p>
        <List title="Technologies:" items={props.technologies} />
    </section>)
}