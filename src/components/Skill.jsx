import "../styles/Skill.css"
export default function Skill({ children, icon }) {
    return (
        <div aria-label="skill" className="skill">
            {icon}
            {children}
        </div>
    )
}