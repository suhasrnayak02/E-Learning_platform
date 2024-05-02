import { useState } from "react"
import FetchCourse from "./FetchCourse"

export default function CourseHome() {

    const [isActive, setActive] = useState("tab1-tab")
    const [Course, setCourse] = useState("hi")

    function handleClick(event) {
        setActive(event.currentTarget.id)
        setCourse(event.currentTarget.innerHTML)

    }
    return (
        <div className="course-area pd-top-100 pd-bottom-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 col-md-11">
                        <div className="section-title style-white text-center">
                            <h2 className="title">Top Featured Courses</h2>
                        </div>
                    </div>
                </div>
                <div className="edmt-nav-tab style-white text-center">
                    <ul className="nav nav-tabs" id="myTab">
                        <li className="nav-item">
                            <a className={isActive == "tab1-tab" ? "nav-link active" : "nav-link"} id="tab1-tab" onClick={handleClick}>Graphics &#38; Design</a></li>
                        <li className="nav-item">
                            <a className={isActive == "tab2-tab" ? "nav-link active" : "nav-link"} id="tab2-tab" onClick={handleClick}>Digital Marketing</a></li>
                        <li className="nav-item">
                            <a className={isActive == "tab3-tab" ? "nav-link active" : "nav-link"} id="tab3-tab" onClick={handleClick}>Writing & Translation</a></li>
                        <li className="nav-item">
                            <a className={isActive == "tab4-tab" ? "nav-link active" : "nav-link"} id="tab4-tab" onClick={handleClick}>Music & Audio</a></li>
                    </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                        <div className="row">
                            <FetchCourse category={Course} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}