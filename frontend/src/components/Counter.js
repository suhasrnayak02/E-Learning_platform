import other1 from "../assets/img/other/1.png"

const divStyle = {
    backgroundImage: 'url(' + other1 + ')',
}

export default function Counter(){
    return(
        <div className="counter-area bg-gray">
        <div className="container">
            <div className="counter-area-inner pd-top-120 pd-bottom-120" style={divStyle}>
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="section-title mb-0">
                            <h6 className="sub-title right-line">Funfact</h6>
                            <h2 className="title">A JOURNEY THAT IS TRUSTED</h2>
                            <p className="content pb-3">edumint creates value for students through effective learning material and placement opportunities by helping them achieve success.</p>
                            <div className="btn-counter bg-base mt-4">
                                <h3 className="left-val align-self-center"><span className="counter">1.5</span>k+</h3>
                                <div className="right-val align-self-center">
                                    Successful <br /> students
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 align-self-center">
                        <ul className="single-list-wrap">
                            <li className="single-list-inner style-box-bg">
                                <div className="media">
                                    <div className="media-left">
                                        <img src={require("../assets/img/icon/1.png")} alt="img" />
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h5><span className="counter">1000</span>+</h5>
                                        <p>Industry Experts</p>
                                    </div>
                                </div>
                            </li>
                            <li className="single-list-inner style-box-bg">
                                <div className="media">
                                    <div className="media-left">
                                        <img src={require("../assets/img/icon/2.png")} alt="img" />
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h5><span className="counter">800</span>+</h5>
                                        <p>Hiring Partners</p>
                                    </div>
                                </div>
                            </li>
                            <li className="single-list-inner style-box-bg">
                                <div className="media">
                                    <div className="media-left">
                                        <img src={require("../assets/img/icon/3.png")} alt="img" />
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h5><span className="counter">90</span>%</h5>
                                        <p>Placement Rate</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}