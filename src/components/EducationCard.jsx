import "../styles/EducationCard.css"

export default function EducationCard(props) {
    return (
        <section className="education-card">
            <h1 className="education-title">{props.title}</h1>
            <h2 className="education-degree">{props.degree}</h2>
            {props.gpa && <h4>GPA: {props.gpa}</h4>}
            <img src={props.src} alt={props.alt} className="education-logo" />
            <p className="education-body">{props.children}</p>
            {props.coursework && <div className="coursework-display">
                <p>Relevant Coursework:</p>
                <ul className="education-coursework">
                    {props.coursework.map(course => <li className="education-course" key={course}>{course}</li>)}
                </ul>
            </div>}

        </section>
    )
}