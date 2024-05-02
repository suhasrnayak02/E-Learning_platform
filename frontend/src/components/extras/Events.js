const divStyle = {
    backgroundColor: 'var(--heading-color)'
}

export default function Events(){
    return(
        <div className="events-area pd-top-110 pd-bottom-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-11">
                    <div className="section-title text-center">
                        <h6 className="sub-title double-line">EVENTS</h6>
                        <h2 className="title">Upcoming Events</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <ul className="single-blog-list-wrap style-white" style={divStyle}>
                        <li>
                            <div className="media single-blog-list-inner style-white">
                                <div className="media-left date">
                                    <span>JAN</span>
                                    20
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                        <li><i className="fa fa-user"></i> BY ADMIN</li>
                                        <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                                    </ul>
                                    <h5><a href="blog-details.html">Clone sit amet, consec tetur elit</a></h5>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="media single-blog-list-inner">
                                <div className="media-left date">
                                    <span>FEB</span>
                                    26
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                        <li><i className="fa fa-user"></i> BY ADMIN</li>
                                        <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                                    </ul>
                                    <h5><a href="blog-details.html">Maecenas interdum lorem eleifend</a></h5>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="media single-blog-list-inner">
                                <div className="media-left date">
                                    <span>JAN</span>
                                    28
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                        <li><i className="fa fa-user"></i> BY ADMIN</li>
                                        <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                                    </ul>
                                    <h5><a href="blog-details.html">Nunc scelerisque tincidunt elit. </a></h5>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 align-self-center">
                    <div className="event-thumb">
                        <img src={require("../assets/img/other/events.png")} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}