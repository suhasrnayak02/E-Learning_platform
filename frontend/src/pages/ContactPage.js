import Navbar from '../components/Navbar';
import Breadcrumb from "../components/Breadcrumb";
import ContactList from "../components/ContactList"
import Counter2 from "../components/Counter2";
// import Contact2 from "../components/Contact2";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb text="Contact us" />
            <ContactList />
            <Counter2 />
            {/* <Contact2 /> */}
        </>
    )
}