import { Link } from "react-router-dom";

export default function Blog2(){
    return(
        <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-details-page-content">
                        <div className="single-blog-inner">
                            <div className="thumb">
                                <img src= {require("../assets/img/blog/4.png")}  alt="img" />
                            </div>
                            <div className="details">
                                <ul className="blog-meta">
                                    <li><i className="fa fa-user"></i> BY ADMIN</li>
                                    <li><i className="fa fa-calendar-check-o"></i> 28 JANUARY, 2020</li>
                                </ul>
                                <h3 className="title">Flock by when MTV ax quiz prog quiz graced</h3>
                                <p>Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                                    ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <blockquote>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
                                    <h6 className="mb-0 mt-2">Marilyn Gilbert</h6>
                                </blockquote>
                                <p>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                    est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam</p>
                                <div className="thumb mb-4">
                                    <img src= {require("../assets/img/blog/single.png")}  alt="img" />
                                </div>
                                <h5>AMC Entertainment sparks calls for scrutiny</h5>
                                <p>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                    est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam</p>
                                <ul className="single-list-wrap">
                                    <li className="single-list-inner style-check">
                                        <i className="fa fa-check"></i> Stet clita kasd gubergren, no sea takimata sanctus
                                    </li>
                                    <li className="single-list-inner style-check">
                                        <i className="fa fa-check"></i> Ligula cur maecenas no sea takimata
                                    </li>
                                    <li className="single-list-inner style-check">
                                        <i className="fa fa-check"></i> Fringilla nulla maecenas
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tag-and-share">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6>Related Tags :</h6>
                                    <div className="tags">
                                        <a href="#">Treands, </a>
                                        <a href="#">Inttero, </a>
                                        <a href="#">Estario</a>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-sm-right">
                                    <div className="blog-share">
                                        <h6>Share :</h6>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook-f" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-comment">
                            <div className="section-title style-small">
                                <h3>Comments</h3>
                            </div>
                            <div className="media">
                                <a href="#">
                                    <img src= {require("../assets/img/team/1.jpeg")}  alt="comment" />
                                </a>
                                <div className="media-body">
                                    <h5>
                                        <a href="#">Aaron Holmes</a>
                                        <span className="date">25 July 2020</span>
                                    </h5>
                                    <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat
                                        tincidunt. Nam sem lacus, ornare non ante sed, ultricies</p>
                                    <a href="#">REPLY</a>
                                </div>
                            </div>
                            <div className="media nesting">
                                <a href="#">
                                    <img src= {require("../assets/img/team/2.jpeg")}  alt="comment" />
                                </a>
                                <div className="media-body">
                                    <h5>
                                        <a href="#">Aaron Holmes</a>
                                        <span className="date">25 July 2020</span>
                                    </h5>
                                    <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat
                                        tincidunt. Nam sem lacus</p>
                                    <a href="#">REPLY</a>
                                </div>
                            </div>
                            <div className="media border-0">
                                <a href="#">
                                    <img src= {require("../assets/img/team/3.jpeg")}  alt="comment" /> 
                                </a>
                                <div className="media-body">
                                    <h5>
                                        <a href="#">Aaron Holmes</a>
                                        <span className="date">25 July 2020</span>
                                    </h5>
                                    <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat
                                        tincidunt. Nam sem lacus, ornare non ante sed, ultricies</p>
                                    <a href="#">REPLY</a>
                                </div>
                            </div>
                        </div>
                        <form className="blog-comment-form">
                            <div className="mb-3">
                                <h3 className="mb-0">Leave a Reply</h3>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-input-inner style-bg-border">
                                        <textarea placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-base">Post Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="td-sidebar">
                        <div className="widget widget_search">
                            <form className="search-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Search" />
                                </div>
                                <button className="submit-btn" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div className="widget widget_catagory">
                            <h4 className="widget-title">Catagory</h4>
                            <ul className="catagory-items">
                                <li><a href="#">Tempor lorem interdum <i className="fa fa-caret-right"></i></a></li>
                                <li><a href="#">Auctor mattis lacus <i className="fa fa-caret-right"></i></a></li>
                                <li><a href="#">Dolor proin <i className="fa fa-caret-right"></i></a></li>
                                <li><a href="#">Pharetra amet <i className="fa fa-caret-right"></i></a></li>
                            </ul>
                        </div>
                        <div className="widget widget-recent-post">
                            <h4 className="widget-title">Recent News</h4>
                            <ul>
                                <li>
                                    <div className="media">
                                        <div className="media-left">
                                            <img src= {require("../assets/img/widget/1.png")}  alt="blog" />
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5 className="title"><a href="#">Integer at faucibus urna.
                                                    Nullam condtum</a></h5>
                                            <div className="post-info"><i className="fa fa-calendar"></i><span>15 October</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-left">
                                            <img src= {require("../assets/img/widget/2.png")}  alt="blog" />
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5 className="title"><a href="#">Custom Platform for an Audit
                                                    Insurance</a></h5>
                                            <div className="post-info"><i className="fa fa-calendar"></i><span>15 October</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-left">
                                            <img src= {require("../assets/img/widget/3.png")}  alt="blog" />
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5 className="title"><a href="#">Famous app Developers and
                                                    Designer</a></h5>
                                            <div className="post-info"><i className="fa fa-calendar"></i><span>15 October</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget_price">
                            <h4 className="widget-title">Price</h4>
                            <label className="single-checkbox">
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                                Free Courses
                            </label>
                            <label className="single-checkbox">
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                                Paid Courses
                            </label>
                            <label className="single-checkbox">
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                                Only Subscription
                            </label>
                        </div>
                        <div className="widget widget_level">
                            <h4 className="widget-title">Level</h4>
                            <label className="single-checkbox">
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                                Beginner
                            </label>
                            <label className="single-checkbox">
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                                Intermediate
                            </label>
                            <label className="single-checkbox">
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                                Advanced
                            </label>
                        </div>
                        <div className="widget widget_tags mb-0">
                            <h4 className="widget-title">Tags</h4>
                            <div className="tagcloud">
                                <a href="#">Art</a>
                                <a href="#">Creative</a>
                                <a href="#">Article</a>
                                <a href="#">Designer</a>
                                <a href="#">Portfolio</a>
                                <a href="#">Project</a>
                                <a href="#">Personal</a>
                                <a href="#">Landing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}