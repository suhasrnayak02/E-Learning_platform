import { Link } from "react-router-dom";
import about5 from "../assets/img/about/5.png"
const divStyle = {
    backgroundImage: 'url(' + about5 + ')',
}

export default function About2(){
    return(
        <div className="about-area pd-top-120 pd-bottom-120">
        <div className="container">
            <div className="about-area-inner">
                <div className="row">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-thumb-wrap after-shape"
                            style={divStyle}>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-inner-wrap">
                            <div className="section-title mb-0">
                                <h6 className="sub-title right-line">ABOUT US</h6>
                                <h2 className="title">Buildings India's Future.</h2>
                                <p className="content">Write about Big Buudy Solutions ..........</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="single-list-wrap">
                                            <li className="single-list-inner style-check-box">
                                                <i className="fa fa-check"></i> Our Courses
                                            </li>
                                            <li className="single-list-inner style-check-box">
                                                <i className="fa fa-check"></i> Our Mentors
                                            </li>
                                            <li className="single-list-inner style-check-box">
                                                <i className="fa fa-check"></i> Our Team
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="single-list-wrap">
                                            <li className="single-list-inner style-check-box">
                                                <i className="fa fa-check"></i> Our ..
                                            </li>
                                            <li className="single-list-inner style-check-box">
                                                <i className="fa fa-check"></i> Our ..
                                            </li>
                                            <li className="single-list-inner style-check-box">
                                                <i className="fa fa-check"></i> Our ..
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <Link to="../about" className="btn btn-border-black" >Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}