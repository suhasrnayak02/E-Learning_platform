export default function CourseItem(props) {
    return (
        <>
            { props.item.map((ele) => (
                <div className={"col-md-6" + (props.page == "home"? " col-lg-4": "")} key={ele._id}>
                    <div className="single-course-inner">
                        <div className="thumb">
                            <img src={require("../../assets/img/course/1.png")} alt="img" />
                        </div>
                        <div className="details">
                            <div className="details-inner">
                                <div className="emt-user">
                                    <span className="u-thumb"><img src={require("../../assets/img/author/1.png")} alt="img" /></span>
                                    <span className="align-self-center">{ele.instructor}</span>
                                </div>
                                <h6><a href={`../course-details/${ele._id}`}>{ele.title}</a></h6>
                            </div>
                            <div className="emt-course-meta">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="rating">
                                            <i className="fa fa-star"></i> {ele.rating}
                                            {/* <span>(23)</span> */}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="price text-right">
                                            Price: <span>{ele.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}