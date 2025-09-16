import Navbar from "../components/Navbar"
import EducationCard from "../components/EducationCard"

export default function Education() {

    const uoPath = "src/assets/university-of-ottawa-vector-logo.svg"
    const uoSkills = ["Software Engineering", "Mathematics", "Databases"]

    return (<>
        <Navbar active="education" />
        <main className="main-content">
            <EducationCard title="University of Ottawa" degree="B.Sc. Hons. Computer Science" src={uoPath} alt="University of Ottawa Logo" skills={uoSkills}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus varius justo ut tempor. Pellentesque neque ante, semper a iaculis sed, feugiat in purus. Praesent non est molestie, malesuada urna et, consectetur turpis. Nulla ac velit augue. Integer aliquam tortor in urna vestibulum, id rhoncus erat tristique. Aliquam tincidunt tristique odio, lacinia rutrum magna ullamcorper eu. Maecenas tellus metus, pellentesque nec ante sit amet, varius viverra nisl. Fusce orci quam, dapibus quis tortor eu, fringilla ultricies enim. Curabitur lobortis, sapien sit amet vehicula posuere, purus diam vestibulum felis, et hendrerit lorem magna ac justo. Suspendisse potenti. Aenean sagittis nibh quam.</EducationCard>
        </main>
    </>)
}