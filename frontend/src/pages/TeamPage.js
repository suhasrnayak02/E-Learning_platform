import Navbar from '../components/Navbar';
import Breadcrumb from "../components/Breadcrumb";
import Counter from "../components/Counter";
import Team from "../components/Team/Team";
import Testimonial2 from "../components/Testimonial2";

export default function TeamPage(){
    return(
        <>
        <Navbar />
        <Breadcrumb text="Our Team"/>
        <Team />
        <Counter />
        <Testimonial2 />
        </>
    )
}