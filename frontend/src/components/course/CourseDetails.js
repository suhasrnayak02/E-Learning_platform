import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function CourseDetails(props) {

    let navigate = useNavigate()
    const [course, setCourses] = useState({})
    const [isEnrolled, setEnrolled] = useState(false)
    const [isCookie, setCookie] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() => {
        checktoken()
        checkcart()
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/api/courses/' + props.id)
            .then(response => response.json())
            .then(data => {
                setCourses(data)
            })
        console.log(cart)
        if (cart) {

            if (cart.includes(props.id)) {
                setEnrolled(true)
            }
        }
    }, [cart])

    function checktoken() {
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            if (c.substring(0, 5) == "token") {
                setCookie(true)
                return
            }
        }
        setCookie(false)
    }

    function checkcart() {
        console.log("hello")
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            if (c.substring(1, 5) == "cart") {
                console.log(JSON.parse(c.substring(6)))
                setCart(JSON.parse(c.substring(6)))
                return
            }
        }
        setCart([])
    }

    function handleClick() {
        console.log(isCookie)
        if (!isCookie) {
            navigate("../signin")
        }
        else {
            console.log("enroll course clicked")
            let courses = cart
            if (cart) {
                courses.push(props.id)
            }
            else {
                courses = [props.id]
            }
            document.cookie = `cart=${JSON.stringify(courses)}; path=/;`
            setEnrolled(true)
            props.updateUI(true)
        }

    }

    return (
        <div className="course-single-area pd-top-120 pd-bottom-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="course-course-detaila-inner">
                            <div className="details-inner">
                                <div className="emt-user">
                                    {/* <span className="u-thumb"><img src={require("../assets/img/author/1.png")} alt="img" /></span> */}
                                    <span className="align-self-center">{course.instructor}</span>
                                </div>
                                <h3 className="title">{course.title}</h3>
                            </div>
                            <div className="thumb">
                                <img src={require("../../assets/img/course/9.png")} alt="img" />
                            </div>
                            {/* <div className="course-details-nav-tab text-center">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab"
                                            aria-controls="tab1" aria-selected="true">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab"
                                            aria-controls="tab2" aria-selected="false">Curriculum</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab"
                                            aria-controls="tab3" aria-selected="false">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab"
                                            aria-controls="tab4" aria-selected="false">Review</a>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                    <div className="course-details-content">
                                        <p>{course.desc}</p>
                                        {/* <div className="row pt-4">
                                            <div className="col-sm-6">
                                                <ul className="single-list-wrap">
                                                    <li className="single-list-inner style-check-box">
                                                        <i className="fa fa-check"></i> Metus interdum metus
                                                    </li>
                                                    <li className="single-list-inner style-check-box">
                                                        <i className="fa fa-check"></i> Ligula cur maecenas
                                                    </li>
                                                    <li className="single-list-inner style-check-box">
                                                        <i className="fa fa-check"></i> Fringilla nulla
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 mt-3 mt-sm-0">
                                                <ul className="single-list-wrap">
                                                    <li className="single-list-inner style-check-box">
                                                        <i className="fa fa-check"></i> Metus interdum metus
                                                    </li>
                                                    <li className="single-list-inner style-check-box">
                                                        <i className="fa fa-check"></i> Ligula cur maecenas
                                                    </li>
                                                    <li className="single-list-inner style-check-box">
                                                        <i className="fa fa-check"></i> Fringilla nulla
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="td-sidebar">
                            <div className="widget widget_feature">
                                <h4 className="widget-title">Course Features</h4>
                                <ul>
                                    <li><i className="fa fa-user"></i><span>Enrolled :</span> 1200 students</li>
                                    <li><i className="fa fa-clock-o"></i><span>Duration :</span>{course.duration}</li>
                                    <li><i className="fa fa-clipboard"></i><span>Lectures :</span> {course.lectures}</li>
                                    <li><i className="fa fa-clone"></i><span>Categories:</span> {course.category}</li>
                                    <li><i className="fa fa-tags"></i><span>Tags:</span> {course.tags}</li>
                                    <li><i className="fa fa-clipboard"></i><span>Instructor:</span> {course.instructor}</li>
                                </ul>
                                <div className="price-wrap text-center">
                                    <h5>Price:<span>$54.00</span></h5>
                                    <button className="btn btn-base btn-radius" onClick={handleClick} disabled={isEnrolled}>{isEnrolled ? "ADDED TO CART" : "ENROLL COURSE"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}