import CourseItem from "./CourseItem"
import { useState, useEffect } from "react"

const divStyle = {
    cursor: "pointer"
}

export default function CourseFilter() {

    const [course, setCourses] = useState([])
    const [totalcourses, settotal] = useState(null)
    // const [free, setfree] = useState("")
    // const [paid, setpaid] = useState("")
    const [page, setpage] = useState(1)
    const [category, setCategory] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3000/api/courses${category}`)
            .then(response => response.json())
            .then(data => {
                if (totalcourses == null) {
                    settotal(data.length)
                }
                setCourses(data)
            })
    }, [category])

    function handle_page_change(event) {
        setpage(event.currentTarget.id)
    }

    function handleClick(event) {
        setCategory(`/category/${event.currentTarget.id}`)
    }

    // function handleChangeFree(event) {
    //     let arr = []
    //     if (event.target.checked) {
    //         for (let ele in course) {
    //             if (ele.free) {
    //                 arr.push(ele)
    //             }
    //         }
    //         setCourses(arr)
    //     }
    //     else {
    //     }
    // }

    // function handleChangePaid(event) {
    //     let arr = []
    //     if (event.target.checked) {
    //         for (let ele in course) {
    //             if (!ele.free) {
    //                 arr.push(ele)
    //             }
    //         }
    //         setCourses(arr)
    //     }
    //     else {
    //     }
    // }

    function PaginationElement(props) {
        return (
            <li><a id = {props.id} className={props.id == page ? "active": ""} style = {divStyle} onClick={handle_page_change}>{props.id}</a></li>
        )
    }

    return (
        <div className="blog-area pd-top-120 pd-bottom-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-lg-12">
                        <div className="row">
                            <CourseItem item={course.slice((page-1)*4, (page-1)*4 + 4)} page="filter" />
                        </div>
                        <nav className="td-page-navigation">
                            <ul className="pagination">
                                <li className="pagination-arrow"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>

                                {[...Array(Math.floor(totalcourses/4)+ 1)].map(
                                    (value, index) => (
                                        <PaginationElement id={index + 1} key={index} />
                                    )
                                )}
                                <li className="pagination-arrow"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-4 order-lg-1 col-12">
                        <div className="td-sidebar mt-5 mt-lg-0">
                            <div className="widget widget_search_course">
                                <h4 className="widget-title">Search</h4>
                                <form className="search-form single-input-inner">
                                    <input type="text" placeholder="Search here" />
                                    <button className="btn btn-base w-100 mt-3" type="submit"><i className="fa fa-search"></i>
                                        SEARCH</button>
                                </form>
                            </div>
                            <div className="widget widget_catagory">
                                <h4 className="widget-title">Catagory</h4>
                                <ul className="catagory-items">
                                    <li><a onClick={handleClick} style={divStyle} id="Graphics and Design">Graphics and Design <i className="fa fa-caret-right"></i></a></li>
                                    <li><a onClick={handleClick} style={divStyle} id="digital marketing">Digital Marketing <i className="fa fa-caret-right"></i></a></li>
                                    <li><a onClick={handleClick} style={divStyle} id="Writing and Translation">Writing and Translation <i className="fa fa-caret-right"></i></a></li>
                                    <li><a onClick={handleClick} style={divStyle} id="Music and Audio">Music and Audio <i className="fa fa-caret-right"></i></a></li>
                                </ul>
                            </div>
                            <div className="widget widget_checkbox_list">
                                <h4 className="widget-title">Price</h4>
                                <label className="single-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    Free Courses
                                </label>
                                <label className="single-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    Paid Courses
                                </label>
                                {/* <label className="single-checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Only Subscription
                            </label> */}
                            </div>
                            {/* <div className="widget widget_checkbox_list">
                            <h4 className="widget-title">Level</h4>
                            <label className="single-checkbox">
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                                Beginner
                            </label>
                            <label className="single-checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Intermediate
                            </label>
                            <label className="single-checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Advanced
                            </label>
                        </div> */}
                            {/* <div className="widget widget_tags mb-0">
                            <h4 className="widget-title">Tags</h4>
                            <div className="tagcloud">
                                <a href="#">Art</a>
                                <a href="#">Creative</a>
                                <a href="#">Article</a>
                                <a href="#">Designer</a>
                                <a href="#">Portfolio</a>
                                <a href="#">Project</a>
                                <a href="#">Personal</a>
                                <a href="#">Landing</a>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}