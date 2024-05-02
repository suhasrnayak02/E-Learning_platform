import other2 from "../assets/img/other/2.png"
const divStyle = {
    backgroundImage: 'url(' + other2 + ')',
}

export default function Testimonial(){
    return(
        <div className="testimonial-area pd-top-100">
        <div className="container">
            <div className="testimonial-area-inner bg-cover"  style={divStyle}>
                {/* <img className="testimonial-right-img" src={require("../assets/img/other/3.png")} alt="img" /> */}
                <div className="testimonial-slider owl-carousel">
                    <div className="item">
                        <div className="single-testimonial-inner style-white">
                            <span className="testimonial-quote"><i className="fa fa-quote-left"></i></span>
                            <p className="mb-4">Eugene Freeman sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, elitr, sed diam sed diam volu</p>
                            <div className="media testimonial-author">
                                <div className="media-left">
                                    <img src={require("../assets/img/author/1.png")} alt="img" />
                                    <i className="fa fa-quote-left"></i>
                                </div>
                                <div className="media-body align-self-center">
                                    <h6>Eugene Freeman</h6>
                                    <p>Tincidunt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="single-testimonial-inner style-white">
                            <span className="testimonial-quote"><i className="fa fa-quote-left"></i></span>
                            <p className="mb-4">Jaction Freeman amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed elitr, sed diam diam volu</p>
                            <div className="media testimonial-author">
                                <div className="media-left">
                                    <img src={require("../assets/img/author/2.png")} alt="img" />
                                    <i className="fa fa-quote-left"></i>
                                </div>
                                <div className="media-body align-self-center">
                                    <h6>Jaction Freeman</h6>
                                    <p>Tincidunt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}