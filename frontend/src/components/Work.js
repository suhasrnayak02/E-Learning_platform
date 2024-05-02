export default function Work(){
    return(
        <div className="work-area pd-top-110">
        <div className="container">
            <div className="section-title">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <h6 className="sub-title right-line">What we do</h6>
                        <h2 className="title">How it works?</h2>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <p className="content mt-lg-0">We are an innovative career guidance and upskilling platform that helps students prepare for their future. The platform provides a personalized mentorship program, assessment tests and facilitates easy access to industry experts. We believe in helping students find the perfect job of their dreams.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="single-intro-inner style-icon-bg bg-gray text-center">
                        <div className="thumb">
                            <img src={require("../assets/img/icon/28.png")} alt="img" />
                        </div>
                        <div className="details">
                            <h5>Personal guidance</h5>
                            <p>Get groomed by experienced software developers who are working in the top companies.</p>
                            <a className="read-more-text" href="signup.html">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-intro-inner style-icon-bg bg-gray text-center">
                        <div className="thumb">
                            <img src={require("../assets/img/icon/29.png")} alt="img" />
                        </div>
                        <div className="details">
                            <h5>Dedicated placement team</h5>
                            <p>A team of warriors ensure your profile reaches top companies.</p>
                            <a className="read-more-text" href="course.html">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-intro-inner style-icon-bg bg-gray text-center">
                        <div className="thumb">
                            <img src={require("../assets/img/icon/30.png")} alt="img" />
                        </div>
                        <div className="details">
                            <h5>Unlimited Interview Practice</h5>
                            <p>Gain confidence with unlimited mock interviews before the real interview.</p>
                            <a className="read-more-text" href="course-details.html">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-intro-inner style-icon-bg bg-gray text-center">
                        <div className="thumb">
                            <img src={require("../assets/img/icon/31.png")} alt="img" />
                        </div>
                        <div className="details">
                            <h5>Lifelong support</h5>
                            <p>Newton School does not end with the course. Your journey with us goes beyond any course.</p>
                            <a className="read-more-text" href="blog-details.html">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}