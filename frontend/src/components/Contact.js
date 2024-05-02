import { useRef } from "react"
import banner2 from "../assets/img/banner/2.png"
const divStyle = {
    backgroundImage: 'url(' + banner2 + ')',
}

export default function Contact(){

    const usernameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    function submitHandler(e){
        e.preventDefault()
        console.log("submitting form")
        let formdata = {
            "name": usernameRef.current.value,
            "email": emailRef.current.value,
            "contact": phoneRef.current.value,
            "subject": subjectRef.current.value,
            "message": messageRef.current.value
        }

        console.log(formdata)

        fetch('http://localhost:3000/api/feedback',
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
            })

    }
    return(
        <div className="contact-area bg-overlay mt-200 pd-bottom-90" style={divStyle}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <form className="contact-form-inner mt-mn-200 style-shadow" onSubmit={submitHandler}>
                        <div className="section-title">
                            <h2 className="title">Request A Quote</h2>
                            <p>We will be happy to answer your questions.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-input-inner">
                                    <input type="text" placeholder="Full name" ref={usernameRef}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-input-inner">
                                    <input type="text" placeholder="Phone Number" ref={phoneRef}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-input-inner">
                                    <input type="text" placeholder="Email Address" ref={emailRef}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-input-inner">
                                    <input type="text" placeholder="Subject" ref={subjectRef}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="single-input-inner">
                                    <textarea placeholder="Your Message" ref={messageRef}></textarea>
                                </div>
                            </div>
                            <div className="col-sm-6 align-self-center">
                                <div className="single-input-inner style-checkbox">
                                    <input type="checkbox" />
                                    Also subscribe us
                                </div>
                            </div>
                            <div className="col-sm-6 text-sm-right">
                                <button className="btn btn-base">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4 align-self-end">
                    <div className="mt-5 mt-lg-0">
                        <ul className="single-list-wrap">
                            <li className="single-list-inner style-white style-check-box-grid-2">
                                <div className="media">
                                    <div className="media-left">
                                        <img src={require("../assets/img/icon/16.png")} alt="img" />
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h5>Our Address</h5>
                                        <p>PSD Building, 2 AlBahr</p>
                                        <p>St, Loskia sripur</p>
                                    </div>
                                </div>
                            </li>
                            <li className="single-list-inner style-white style-check-box-grid-2">
                                <div className="media">
                                    <div className="media-left">
                                        <img src={require("../assets/img/icon/17.png")} alt="img" />
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h5>Our Phone</h5>
                                        <p>+0029129102320</p>
                                        <p>+000 2324 39493</p>
                                    </div>
                                </div>
                            </li>
                            <li className="single-list-inner style-white style-check-box-grid-2">
                                <div className="media">
                                    <div className="media-left">
                                        <img src={require("../assets/img/icon/18.png")} alt="img" />
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h5>Our Email</h5>
                                        <p>name@website.com</p>
                                        <p>Info@orex.com</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}