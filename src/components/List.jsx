import "../styles/List.css"

export default function List(props) {
    return (
        <div className="list-display">
            <p className="list-title">{props.title}</p>
            <ul className="list">
                {props.items.map(item => <li className="list-item" key={item}>{item}</li>)}
            </ul>
        </div>
    )
}