import { useRef } from "react"
import { useNavigate } from "react-router-dom"
export default function Signin() {

    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate();


    function submitHandler(e) {
        e.preventDefault()
        console.log("Handling form")
        let formdata = {
            "email": emailRef.current.value,
            "password": passwordRef.current.value
        }


        fetch('http://localhost:3000/api/auth/login',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.auth) {
                    document.cookie = `token=${data.token}; path=/;`
                    sessionStorage.setItem("user_email", emailRef.current.value)
                    navigate("../")
                }


            })
    }

    return (
        <div className="signin-page-area pd-top-120 pd-bottom-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <form className="signin-inner" onSubmit={submitHandler}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Email" ref={emailRef} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Password" ref={passwordRef} />
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <button className="btn btn-base w-100">Sign In</button>
                                </div>
                                <div className="col-12">
                                    <a href="#">Forgot Your Password</a>
                                    <a href="../signup"><strong> Signup</strong></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}