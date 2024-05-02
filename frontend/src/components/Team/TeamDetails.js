import TeamLayout from "./TeamLayout"
import img_arr from "../../assets/constants/fetch-team"

export default function TeamDetails() {
    return (
        <div className="main-blog-area pd-top-120 pd-bottom-120">
            <TeamLayout img={img_arr} layout="details" />
        </div>
    )
}