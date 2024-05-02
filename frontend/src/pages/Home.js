import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Intro from '../components/Intro';
import About from '../components/About';
import CourseHome from '../components/course/CourseHome';
import Counter from '../components/Counter';
import Work from "../components/Work"
// import Testimonial from '../components/Testimonial';
// import TeamHome from '../components/Team/TeamHome';
// import Blog from '../components/extras/Blog'
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Intro />
            <About />
            <CourseHome />
            <Counter />
            <Work />
            {/* <Testimonial /> */}
            {/* <TeamHome /> */}
            {/* <Blog /> */}
            <Contact />
        </>
    )
}