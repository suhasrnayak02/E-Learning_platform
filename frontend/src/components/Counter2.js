import { useRef, useState } from "react"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export default function Counter2() {

    const [open, setOpen] = useState(false)
    const usernameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    function submitHandler(e) {
        e.preventDefault()
        console.log("submitting form")
        let formdata = {
            "name": usernameRef.current.value,
            "email": emailRef.current.value,
            "contact": phoneRef.current.value,
            "subject": subjectRef.current.value,
            "message": messageRef.current.value
        }

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
                setOpen(true)
            })
    }

    return (
        <div className="counter-area pd-bottom-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-title mb-0">
                            <h6 className="sub-title right-line">Get in touch</h6>
                            <h2 className="title">Write Us a Message</h2>
                            <p className="content pb-3">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
                                quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, </p>
                            <ul className="social-media style-base pt-3">
                                <li>
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form className="contact-form-inner  mt-5 mt-md-0" onSubmit={submitHandler}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="First Name" ref={usernameRef} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Last Name" ref={phoneRef} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Email" ref={emailRef} />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Subject" ref={subjectRef} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-input-inner style-bg-border">
                                        <textarea placeholder="Message" ref={messageRef}></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-base">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={()=>{setOpen(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    Thank you for contacting us. We will reach out to you soon!!
                </Box>
            </Modal>
        </div>
    )
}