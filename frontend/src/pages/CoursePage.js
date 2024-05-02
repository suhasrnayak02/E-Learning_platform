import Navbar from '../components/Navbar';
import CourseFilter from "../components/course/CourseFilter";
import Breadcrumb from "../components/Breadcrumb";

export default function CoursePage() {
    return (
        <>
            <Navbar />
            <Breadcrumb text="Courses" />
            <CourseFilter />
        </>
    )
}