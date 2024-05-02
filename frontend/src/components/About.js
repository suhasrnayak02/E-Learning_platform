import icon4 from '../assets/img/icon/4.png';
import banner2 from "../assets/img/banner/2.png"

const divStyle = {
    backgroundImage: 'url(' + banner2 + ')',
}

export default function About(){
    return(
        <div className="about-area pd-top-140">
        <div className="container">
            <div className="about-area-inner">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-thumb-wrap left-icon" style={divStyle}>
                            <div className="about-icon"><img src={icon4} alt="img" /></div>
                            <div className="bottom-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-inner-wrap pl-xl-4 pt-5 pt-lg-0 mt-5 mt-lg-0">  
                            <div className="section-title mb-0">
                                <h6 className="sub-title right-line">ABOUT US</h6>
                                <h2 className="title">Strength in Numbers</h2>
                                <p className="content">Edumint strength lies in offering an extraordinarily relevant and rigorous pedagogy that brings world-class career opportunities to anyone from any part of the country. The organisation plans to rapidly scale up and place 10,000+ students by the end of 2022.</p>
                                <ul className="single-list-wrap">
                                    <li className="single-list-inner style-check-box-grid">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="media-body">
                                                <h5>Ligula molestie</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="single-list-inner style-check-box-grid">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="media-body">
                                                <h5>Ligula molestie</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}