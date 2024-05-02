import TeamLayout from "./TeamLayout"
import img_arr from "../assets/constants/fetch-team"

export default function TeamGallery() {
    return (
        <div className="team-area pd-top-120 pd-bottom-90">
            <div className="container">
                <div className="row justify-content-center">
                    <TeamLayout img={img_arr} layout="gallery" />
                </div>
            </div>
        </div>
    )
}