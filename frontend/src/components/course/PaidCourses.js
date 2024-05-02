import CourseItem from "./CourseItem"
import { useState, useEffect } from "react"
import { data } from "jquery"

export default function PaidCourses() {
    const [course, setCourses] = useState([])

    useEffect(() => {
        fetch_paid_courses()
    }, [])

    async function fetch_paid_courses() {
        const res = await fetch(`http://localhost:3000/api/registeredcourses/${sessionStorage.getItem("user_email")}`)
        const user = await res.json()
        const data = await fetch_course(user)
    }

    function fetch_course(data) {
        return new Promise((resolve, reject) => {
            let course_arr = []
            for (let ele of data.courses) {
                fetch('http://localhost:3000/api/courses/' + ele)
                    .then(response => response.json())
                    .then(data => {
                        course_arr.push(data)
                        setCourses(course_arr)
                    })
            }
            resolve(course)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 order-lg-12">
                    <div className="row">
                        <br />
                        <CourseItem item={course} page="filter" />
                    </div>
                </div>
            </div>
        </div>
    )
}