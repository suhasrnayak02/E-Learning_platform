import { useState, useEffect } from "react"
import CourseItem from "./CourseItem"

export default function FetchCourse(props) {

    const [course, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/courses/category/' + props.category)
            .then(response => response.json())
            .then(data => {
                setCourses(data)
            })
    }, [props.category])

    return (
        <CourseItem item={course} page="home" />
    )
}