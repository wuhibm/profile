import "../styles/EducationCard.css"
import "../styles/Card.css"
import List from "./List"

export default function EducationCard(props) {
    return (
        <section className="card">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.degree}</h2>
            {props.gpa && <h4>GPA: {props.gpa}</h4>}
            <img src={props.src} alt={props.alt} className="education-logo" />
            <p className="body-text">{props.children}</p>
            {props.coursework && <List title="Relevant Coursework:" items={props.coursework} />}


        </section>
    )
}