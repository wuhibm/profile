import Navbar from "../components/Navbar"
import EducationCard from "../components/EducationCard"
import uoPath from "../assets/university-of-ottawa-vector-logo.svg"
import ashburyPath from "../assets/logo.png"
import harvardXPath from "../assets/harvardX.png"
import scrimbaPath from "../assets/KY1XZp9o_400x400.jpg"

export default function Education() {

    const uoCourses = ["Algorithms and Data Structures", "Programming Paradigms", "Discrete Structures", "Databases"]
    const ashburyCourses = ["Intro to Computer Science", "Computer Science"]
    const scrimbaCourses = ["HTML & CSS", "UI Design", "React", "Advanced React"]

    const educations = [
        {
            gpa: "9.4 / 10",
            title: "University of Ottawa",
            degree: "B.Sc. Hons. Computer Science",
            src: uoPath,
            alt: "University of Ottawa Logo",
            coursework: uoCourses,
            body: "I am currently studying Computer Science at the University of Ottawa. I have excelled at my classes here which have greatly improved my software development skills. For example, in my Software Engineering class, I collaborated with four classmates and created an Android application. We used the Software Development Life Cycle (SDLC) to successfully plan and implement this application and made use of GitHub for effective collaboration. "
        },
        {
            gpa: "95%",
            title: "Ashbury College",
            degree: "Ontario Secondary School Diploma",
            src: ashburyPath,
            alt: "Ashbury College Logo",
            coursework: ashburyCourses,
            body: "I completed high school at Ashbury College, where I learned Computer Science in Grade 11 and 12 (ICS3U & ICS4U) using mostly Java. During this time, I learned the importance of planning and testing applications, which are crucial and often overlooked stages of developing functional applications. I also was introduced to algorithms and data structures, and this is where I learned to think like a programmer. "
        },
        {
            title: "HarvardX",
            degree: "CS50",
            src: harvardXPath,
            alt: "Harvard and EdX Logos",
            body: "HarvardX’s CS50 gave me a firm grasp on the fundamentals of computer science and rounded out my skills as a programmer. The course began with C, giving me a good understanding of memory management. I also learned SQL and strengthened my Python skills. CS50 also introduced me to the python web framework, Django."
        },
        {
            title: "Scrimba",
            degree: "Courses",
            src: scrimbaPath,
            alt: "Scrima Logo",
            coursework: scrimbaCourses,
            body: "Scrimba is an engaging online learning environment where I have learned React, as well as immensely improved my web design skills. It allows for a significant amount of actual applied, hand on keyboard learning, with frequent coding challenges and mini projects that allowed me to effectively use what I learned. "
        }
    ]

    return (<>
        <Navbar active="education" />
        <main className="main-content">

            {educations.map(education => <EducationCard key={education.title} {...education} >{education.body}</EducationCard>)}
        </main>
    </>)
}