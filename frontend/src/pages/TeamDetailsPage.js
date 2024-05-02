import Navbar from '../components/Navbar';
import Breadcrumb from "../components/Breadcrumb";
import TeamDetails from "../components/Team/TeamDetails";

export default function TeamDetailsPage(){
    return(
        <>
        <Navbar />
        <Breadcrumb text="Team Details"/>
        <TeamDetails />
        </>
    )
}