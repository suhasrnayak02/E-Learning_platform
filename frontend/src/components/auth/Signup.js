import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./validate.css"

let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let password_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;


export default function Signup() {

    const [validateclass, setClass] = useState(["single-input-inner", "single-input-inner", "single-input-inner"])

    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const navigate = useNavigate();

    function checkUsername(str) {
        if (!str) {
            let new_arr = [...validateclass]
            new_arr[0] = "single-input-inner is-invalid";
            setClass(new_arr)
            return false;
        }
        return true
    }

    function checkPassword(str1, str2) {
        if (str1 != str2) {
            console.log("Password do not match  ")
            let new_arr = [...validateclass]
            new_arr[2] = "single-input-inner is-invalid";
            setClass(new_arr)
            return false;
        }
        return true
    }

    function validate(regex, str, i) {

        if (validateclass[i].includes("is-invalid")) {
            let new_arr = [...validateclass]
            new_arr[i] = "single-input-inner";
            setClass(new_arr)
        }

        if (!regex.test(str)) {
            let new_arr = [...validateclass]
            new_arr[i] = "single-input-inner is-invalid";
            setClass(new_arr)
            return false
        }
        return true
    }

    function submitHandler(e) {
        e.preventDefault()

        if (
            checkUsername(usernameRef.current.value) &&
            checkPassword(passwordRef.current.value, confirmPasswordRef.current.value) &&
            validate(email_regex, emailRef.current.value, 1) &&
            validate(password_regex, passwordRef.current.value, 2)) {

            console.log("Entered")
            let formdata = {
                "name": usernameRef.current.value,
                "email": emailRef.current.value,
                "password": passwordRef.current.value
            }

            fetch('http://localhost:3000/api/auth/register',
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
                    document.cookie = `token=${data.token}; path=/;`
                    sessionStorage.setItem("user_email", emailRef.current.value)
                    navigate("../")

                })
        }
    }

    return (
        <div className="signup-page-area pd-top-120 pd-bottom-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <form className="signin-inner" onSubmit={submitHandler}>
                            <div className="row">
                                <div className="col-12">
                                    <div className={validateclass[0]}>
                                        <input type="text" placeholder="Username" ref={usernameRef} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={validateclass[1]}>
                                        <input type="text" placeholder="Email" ref={emailRef} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={validateclass[2]}>
                                        <input type="text" placeholder="Password" ref={passwordRef} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={validateclass[2]}>
                                        <input type="text" placeholder="Confirm Password" ref={confirmPasswordRef} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-checkbox-inner">
                                        <input type="checkbox" />
                                        By clicking "create account".
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <button className="btn btn-base w-100">Create Account</button>
                                </div>
                                <div className="col-12">
                                    <span>By creating an account</span>
                                    <a href="../signin"><strong>Signin</strong></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}