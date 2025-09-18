import "../styles/Skill.css"
export default function Skill({ children, icon }) {
    return (
        <div className="skill">
            {icon}
            {children}
        </div>
    )
}