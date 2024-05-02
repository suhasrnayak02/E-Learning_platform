import './Team.css'

export default function TeamLayout(props) {
    if (props.layout == "home") {
        return (
            <div className="work-area pd-top-110">
                <div className="container">
                    <div className="section-title">
                        <div className="row">
                            {props.img.map((img_data) => (
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-intro-inner style-icon-bg bg-gray text-center">
                                        <div>
                                            <img src={img_data.file} alt="img" />
                                        </div>
                                        <div className="details">
                                            <h5>{img_data.name}</h5>
                                            <p>Ipsum yorem dolor amet sit  elit. Duis at est id leosco for it</p>
                                            <a className="read-more-text" href="signup.html">Read More <i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else if (props.layout == "gallery") {
        return (
            <>
                {props.img.map((img_data) => (
                    <div className="col-lg-4 col-md-6" key={img_data.name}>
                        <div className="single-gallery-inner">
                            <div className="thumb">
                                <img src={img_data.file} alt="img" />
                            </div>
                            <div className="details">
                                <span>{img_data.name}</span>
                                <h4><a href="#">{img_data.role} </a></h4>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
    else if (props.layout == "page") {
        return (
            <>
                {props.img.map((img_data) => (
                    <div className="profile-card">
                        <div className="img">
                            <img src={img_data.file} />
                        </div>
                        <div className="caption">
                            <h3>{img_data.name}</h3>
                            <p>{img_data.role}</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    else if (props.layout == "details") {
        return (
            <>
                {props.img.map((img_data) => (
                    <div className="container" key={img_data.name}>
                        <div className="team-details-page">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="thumb">
                                        <img src={img_data.file} alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
                                    <div className="details">
                                        <h3>{img_data.name}</h3>
                                        <span className="designation">{img_data.name}</span>
                                        <span>Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz
                                            whangs jumpy veldt</span>
                                        <p className="mt-3">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
                                            prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz,
                                            bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs
                                            jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold
                                            Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew </p>
                                        <ul className="social-media style-base pt-4">
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                ))}
            </>
        )
    }
}
