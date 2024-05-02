import pricing_bg from "../assets/img/bg/pricing-bg.png"
const divStyle = {
    backgroundImage: 'url(' + pricing_bg + ')',
}

export default function Pricing(){
    return(
        <div className="pricing-area pd-top-280 pd-bottom-120 text-center"
        style={divStyle}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-11">
                    <div className="section-title text-center">
                        <h6 className="sub-title double-line">Client Testimonials</h6>
                        <h2 className="title">What our clients say </h2>
                    </div>
                </div>
            </div>
            <div className="testimonial-slider-2 owl-carousel">
                <div className="item">
                    <div className="single-testimonial-inner">
                        <span className="testimonial-quote"><i className="fa fa-quote-right"></i></span>
                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a
                            in ipsum.</p>
                        <div className="media testimonial-author">
                            <div className="media-left">
                                <img src={require("../assets/img/testimonial/1.png")} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                                <h6>Eugene Freeman</h6>
                                <p>Tincidunt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="single-testimonial-inner">
                        <span className="testimonial-quote"><i className="fa fa-quote-right"></i></span>
                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a
                            in ipsum.</p>
                        <div className="media testimonial-author">
                            <div className="media-left">
                                <img src={require("../assets/img/testimonial/2.png")} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                                <h6>Kelly Coleman</h6>
                                <p>Nulla nec</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}