import other2 from "../assets/img/other/2.png"
const divStyle = {
    backgroundImage: 'url(' + other2 + ')',
}

const divStyle2 = {
    backgroundColor: "var(--main-color)"
}

export default function Speciality() {
    return (
        <div className="spaciality-area mg-top--170">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="testimonial-area-inner bg-cover h-100"
                            style={divStyle}>
                            <img className="testimonial-right-img" src={require("../assets/img/other/4.png")} alt="img" />
                                <div className="single-testimonial-inner style-white">
                                    <h4 className="text-white">A Journey to Excellence.</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo
                                        luctus gravida a in ipsum.</p>
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
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="subscribe-inner-area h-100" style={divStyle2}>
                            <h3>Committed to educating and nurturing all students</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a
                                in ipsum.</p>
                            <div className="single-input-inner">
                                <input type="text" placeholder="Email Address" />
                                    <button className="btn btn-black"><i className="fa fa-envelope"></i> Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}