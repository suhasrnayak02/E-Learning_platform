import Breadcrumb from "../components/Breadcrumb";
import Counter from "../components/Counter";
import TeamGallery from "../components/TeamGallery";
import Testimonial2 from "../components/Testimonial2";


export default function Gallery() {
    return (
        <>
            <Breadcrumb text="Gallery"/>
            <TeamGallery />
            <Counter />
            <Testimonial2 />
        </>
    )
}