import { Link } from "react-router-dom";

export default function Blog(){
    return(
        <div className="blog-area pd-top-80 pd-bottom-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                    <div className="section-title text-center">
                        <h6 className="sub-title double-line">Latest News</h6>
                        <h2 className="title">Our Insights & Articles</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <ul className="single-blog-list-wrap mb-5 mb-lg-0">
                        <li>
                            <div className="media single-blog-list-inner">
                                <div className="media-left date">
                                    <span>JAN</span>
                                    20
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                        <li><i className="fa fa-user"></i> BY ADMIN</li>
                                        <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                                    </ul>
                                    <h5><Link to="../blog-details">Duis pretium gravida enim maximus</Link></h5>
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
                                    <h5><Link to="../blog-details">Maecenas interdum lorem eleifend</Link></h5>
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
                                    <h5><Link to="../blog-details">Nunc scelerisque tincidunt elit. </Link></h5>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-8">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="single-blog-inner">
                                <div className="thumb">
                                    <img src={require("../../assets/img/blog/1.png")} alt="img" />
                                    <span className="date">28 JANUARY, 2020</span>
                                </div>
                                <div className="details">
                                    <ul className="blog-meta">
                                        <li><i className="fa fa-user"></i> BY ADMIN</li>
                                        <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                                    </ul>
                                    <h5><Link to="../blog-details">Quisque suscipit ipsum est, eu venenatis leo</Link></h5>
                                    <Link className="read-more-text" to="../blog-details">READ MORE <i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-blog-inner">
                                <div className="thumb">
                                    <img src={require("../../assets/img/blog/2.png")} alt="img" />
                                    <span className="date">28 JANUARY, 2020</span>
                                </div>
                                <div className="details">
                                    <ul className="blog-meta">
                                        <li><i className="fa fa-user"></i> BY ADMIN</li>
                                        <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                                    </ul>
                                    <h5><Link to="../blog-details">Maecenas interdu rem eleifend orci aliquam</Link></h5>
                                    <Link className="read-more-text" to="../blog-details">READ MORE <i className="fa fa-angle-right"></i></Link>
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