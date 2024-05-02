import Navbar from '../components/Navbar';
import Breadcrumb from "../components/Breadcrumb";
import Signin from "../components/auth/Signin"

export default function SigninPage(){
    return(
        <>
        <Navbar />
        <Breadcrumb text="Signin"/>
        <Signin />
        </>
    )
}