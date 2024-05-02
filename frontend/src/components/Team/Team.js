import TeamLayout from "./TeamLayout"
import team_arr from "../../assets/constants/fetch-team"
import mentor_arr from "../../assets/constants/fetch-mentors"

export default function TeamPageComponent() {
    return (
        <div className="team-area pd-top-120 pd-bottom-90">
            <div>
                <div className="section-title text-center">
                    <h2 className="title">Meet our Mentors</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <TeamLayout img={mentor_arr} layout="page" />
                    </div>
                </div>
            </div>
            <div className="bg-gray">
                <div className="section-title text-center">
                    <h2 className="title">Our Creative Team</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <TeamLayout img={team_arr} layout="page" />
                    </div>
                </div>
            </div>


        </div>
    )
}