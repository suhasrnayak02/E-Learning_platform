import Navbar from '../components/Navbar';
import Breadcrumb from "../components/Breadcrumb";
import Signup from "../components/auth/Signup"

export default function SignupPage(){
    return(
        <>
        <Navbar />
        <Breadcrumb text="Signup"/>
        <Signup />
        </>
    )
}