import Navbar from '../components/Navbar';
import Breadcrumb from "../components/Breadcrumb";
import About2 from "../components/About2";
import Counter from "../components/Counter";
import Team from "../components/Team/Team"
// import Speciality from "../components/Speaciality";
// import Pricing from "../components/Pricing";
// import Events from "../components/Events";

export default function About() {
    return (
        <>
            <Navbar />
            <Breadcrumb text="About us"/>
            <About2 />
            <Counter />
            <Team />
            {/* <Speciality /> */}
            {/* <Pricing />
            <Events /> */}
        </>
    )
}