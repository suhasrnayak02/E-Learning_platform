import Navbar from '../components/Navbar';
import Breadcrumb from "../components/Breadcrumb";
import CourseDetails from "../components/course/CourseDetails";
import { useState } from 'react';
import {useParams} from "react-router-dom"

export default function CourseDetailsPage(){

    const [isUpdate, update] = useState(false)
    let id = useParams()

    function updateUI(val){
        update(true)
    }
    return(
        <>
        <Navbar />
        <Breadcrumb text="Course Details"/>
        <CourseDetails id={id.id} updateUI={updateUI}/>
        </>
    )
}