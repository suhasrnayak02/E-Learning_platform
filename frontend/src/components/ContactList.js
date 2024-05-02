export default function ContactList(){
    return(
        <div className="contact-list pd-top-120 pd-bottom-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="contact-list-inner">
                        <div className="media">
                            <div className="media-left">
                                <img src={require("../assets/img/icon/17.png")} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                                <h5>Our Phone</h5>
                                <p>000 2324 39493</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-list-inner">
                        <div className="media">
                            <div className="media-left">
                                <img src={require("../assets/img/icon/18.png")} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                                <h5>Our Email</h5>
                                <p>name@website.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-list-inner">
                        <div className="media">
                            <div className="media-left">
                                <img src={require("../assets/img/icon/16.png")} alt="img" />
                            </div>
                            <div className="media-body align-self-center">
                                <h5>Our Address</h5>
                                <p>2 St, Loskia, amukara.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}