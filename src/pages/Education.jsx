import Navbar from "../components/Navbar"
import EducationCard from "../components/EducationCard"

export default function Education() {

    const uoPath = "src/assets/university-of-ottawa-vector-logo.svg"
    const uoCourses = ["Algorithms and Databases", "Discrete Structures", "Databases"]

    const ashburyPath = "src/assets/logo.png"
    const ashburyCourses = ["Intro to Computer Science", "Computer Science"]

    const harvardXPath = "src/assets/harvardX.png"

    const scrimbaPath = "src/assets/KY1XZp9o_400x400.jpg"
    const scrimbaCourses = ["HTML & CSS", "UI Design", "React", "Advanced React"]

    return (<>
        <Navbar active="education" />
        <main className="main-content">
            <EducationCard gpa="9.4 / 10" title="University of Ottawa" degree="B.Sc. Hons. Computer Science" src={uoPath} alt="University of Ottawa Logo" coursework={uoCourses}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu neque, auctor ut vestibulum non, consequat eget lectus. Morbi sit amet scelerisque lacus. Etiam a est quis mauris condimentum facilisis. Aenean lacus nibh, sagittis id nibh vel, ornare viverra ipsum. Proin rutrum lacus at mi mattis, id ullamcorper odio finibus.

            </EducationCard>
            <EducationCard gpa="95%" title="Ashbury College" degree="Ontario Secondary School Diploma" src={ashburyPath} alt="Ashbury College Logo" coursework={ashburyCourses}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu neque, auctor ut vestibulum non, consequat eget lectus. Morbi sit amet scelerisque lacus. Etiam a est quis mauris condimentum facilisis. Aenean lacus nibh, sagittis id nibh vel, ornare viverra ipsum. Proin rutrum lacus at mi mattis, id ullamcorper odio finibus.

            </EducationCard>
            <EducationCard title="HarvardX" src={harvardXPath} alt="Harvard and EdX Logos" degree="CS50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu neque, auctor ut vestibulum non, consequat eget lectus. Morbi sit amet scelerisque lacus. Etiam a est quis mauris condimentum facilisis. Aenean lacus nibh, sagittis id nibh vel, ornare viverra ipsum. Proin rutrum lacus at mi mattis, id ullamcorper odio finibus.

            </EducationCard>
            <EducationCard title="Scrimba" src={scrimbaPath} alt="Scrima Logo" degree="Courses" coursework={scrimbaCourses}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu neque, auctor ut vestibulum non, consequat eget lectus. Morbi sit amet scelerisque lacus. Etiam a est quis mauris condimentum facilisis. Aenean lacus nibh, sagittis id nibh vel, ornare viverra ipsum. Proin rutrum lacus at mi mattis, id ullamcorper odio finibus.

            </EducationCard>
        </main>
    </>)
}