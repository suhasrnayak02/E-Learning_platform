import intro1 from "../assets/img/intro/1.png"
import intro2 from "../assets/img/intro/2.png"
import intro3 from "../assets/img/intro/3.png"

export default function Intro() {
    return (
        <div className="intro-area intro-area--top">
            <div className="container">
                <div className="intro-area-inner bg-black">
                    <div className="row no-gutters">
                        <div className="col-lg-4 text-lg-left text-center">
                            <div className="intro-title">
                                <h3>Vivamus maximus </h3>
                                <p>Lorem ipsum dolor sadipscing elitr, sed diam nonum</p>
                                <ul>
                                    <li><i className="fa fa-check"></i> Nullam est </li>
                                    <li><i className="fa fa-check"></i> Mattis dictum nunc  </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 align-self-center">
                            <ul className="row no-gutters">
                                <li className="col-md-4">
                                    <div className="single-intro-inner style-white text-center">
                                        <div className="thumb">
                                            <img src={intro1} alt="img" />
                                        </div>
                                        <div className="details">
                                            <h5>Upskill</h5>
                                            <p></p>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <div className="single-intro-inner style-white text-center">
                                        <div className="thumb">
                                            <img src={intro2} alt="img" />
                                        </div>
                                        <div className="details">
                                            <h5>Placement</h5>
                                            <p></p>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <div className="single-intro-inner style-white text-center">
                                        <div className="thumb">
                                            <img src={intro3} alt="img" />
                                        </div>
                                        <div className="details">
                                            <h5>Accounting</h5>
                                            <p>Lorem ipsum dolor</p>
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