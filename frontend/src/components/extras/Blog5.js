export default function Blog5(){
    return(
        <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="single-blog-inner style-border">
                        <div className="thumb">
                            <img src={require("../assets/img/blog/4.png")} alt="img" />
                        </div>
                        <div className="details">
                            <ul className="blog-meta">
                                <li><i className="fa fa-user"></i> BY ADMIN</li>
                                <li><i className="fa fa-calendar-check-o"></i> 28 JANUARY, 2020</li>
                            </ul>
                            <h3 className="title"><a href="blog-details.html">Flock by when MTV ax quiz prog quiz graced</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                            <a className="read-more-text" href="blog-details.html">READ MORE <i
                                    className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="single-blog-inner style-border">
                        <div className="thumb">
                            <img src={require("../assets/img/blog/5.png")} alt="img" />
                        </div>
                        <div className="details">
                            <ul className="blog-meta">
                                <li><i className="fa fa-user"></i> BY ADMIN</li>
                                <li><i className="fa fa-calendar-check-o"></i> 28 JANUARY, 2020</li>
                            </ul>
                            <h3 className="title"><a href="blog-details.html">Quisque suscipit ipsum est, eu venen leo</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                            <a className="read-more-text" href="blog-details.html">READ MORE <i
                                    className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="single-blog-inner style-border">
                        <div className="thumb">
                            <img src={require("../assets/img/blog/6.png")} alt="img" />
                        </div>
                        <div className="details">
                            <ul className="blog-meta">
                                <li><i className="fa fa-user"></i> BY ADMIN</li>
                                <li><i className="fa fa-calendar-check-o"></i> 28 JANUARY, 2020</li>
                            </ul>
                            <h3 className="title"><a href="blog-details.html">When MTV ax quiz prog Flock by graced</a></h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                            <a className="read-more-text" href="blog-details.html">READ MORE <i
                                    className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <nav className="td-page-navigation">
                        <ul className="pagination">
                            <li className="pagination-arrow"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                            <li><a href="#">1</a></li>
                            <li><a className="active" href="#">2</a></li>
                            <li><a href="#">...</a></li>
                            <li><a href="#">3</a></li>
                            <li className="pagination-arrow"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                        </ul>
                    </nav>
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
                                            <img src={require("../assets/img/widget/1.png")} alt="blog" />
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5 className="title"><a href="single-blog.html">Integer at faucibus urna.
                                                    Nullam condtum</a></h5>
                                            <div className="post-info"><i className="fa fa-calendar"></i><span>15 October</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={require("../assets/img/widget/2.png")} alt="blog" />
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5 className="title"><a href="single-blog.html">Custom Platform for an Audit
                                                    Insurance</a></h5>
                                            <div className="post-info"><i className="fa fa-calendar"></i><span>15 October</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={require("../assets/img/widget/3.png")} alt="blog" />
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5 className="title"><a href="single-blog.html">Famous app Developers and
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