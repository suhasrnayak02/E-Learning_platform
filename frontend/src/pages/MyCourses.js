import Navbar from '../components/Navbar';
import PaidCourses from "../components/course/PaidCourses";
import Breadcrumb from "../components/Breadcrumb";

export default function MyCourses() {
    return (
        <>
            <Navbar />
            <Breadcrumb text="My Courses" />
            <PaidCourses />
        </>
    )
}