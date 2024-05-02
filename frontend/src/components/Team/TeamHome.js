import TeamLayout from "./TeamLayout"
import img_arr from "../../assets/constants/fetch-team"

export default function Team() {

    return (
        <div className="team-area pd-top-110">
            <div className="container-fluid pl-4 pr-4">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title text-center">
                            <h6 className="sub-title double-line">Meet Our Team</h6>
                            <h2 className="title">Our Creative Team</h2>
                        </div>
                    </div>
                </div>
                <div className="team-slider">
                    <TeamLayout img={img_arr} layout="home"/>
                </div>
            </div>
        </div>
    )
}