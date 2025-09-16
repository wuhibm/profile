import "../styles/EducationCard.css"

export default function EducationCard(props) {
    return (
        <div className="education-card">
            <h1 className="education-title">{props.title}</h1>
            <h2 className="education-degree">{props.degree}</h2>
            <img src={props.src} alt={props.alt} className="education-logo" />
            <p className="education-body">{props.children}</p>
            <ul className="education-skills">
                {props.skills.map(skill => <li className="education-skill" key={skill}>{skill}</li>)}
            </ul>
        </div>
    )
}