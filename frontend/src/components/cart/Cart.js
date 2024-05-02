import { PropaneSharp } from "@mui/icons-material"
import { useState, useEffect, useRef } from "react"
import styles from "./Cart.module.css"
import CartItem from "./CartItem"

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

export default function Cart(props) {

    const [id, setId] = useState([])
    const [courses, setCourses] = useState([])
    const [isupdate, update] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() => {
        checkcart()
    }, [])

    useEffect(() => {
        if (cart == null) {
            console.log("No item is present")
        }
        else {
            setId(cart)
        }
    }, [cart])

    useEffect(() => {

        if (courses.length < id.length) {
            for (let ele of id) {
                fetch('http://localhost:3000/api/courses/' + ele)
                    .then(response => response.json())
                    .then(data => {
                        let new_course = courses
                        new_course.push(data)
                        setCourses(new_course)
                        if (courses.length == id.length) {
                            update(true)
                        }
                    })
            }
        }

    }, [id, isupdate])



    function calculate_total() {
        let sum = 0
        for (let ele of courses) {
            sum += ele.price
        }
        return sum
    }

    function removeProduct(id) {

        let allId = cart;
        const newId = allId.filter((ele) => {
            return ele != id
        })
        document.cookie = `cart=${JSON.stringify(newId)}; path=/;`
        checkcart()
        const new_course = courses.filter((ele) => {
            return ele._id != id
        })
        setCourses(new_course)
        props.updateUI(true)
    }

    function checkcart() {
        console.log("hello")
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            if (c.substring(1, 5) == "cart") {
                console.log(JSON.parse(c.substring(6)))
                setCart(JSON.parse(c.substring(6)))
                return
            }
        }
        setCart([])
    }

    async function verifypayment(data) {
        const res = await fetch('http://localhost:3000/api/payment/verify',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            })
        const users = await res.json()
        return users
    }

    async function verified(data) {

        const obj = {
            email: sessionStorage.getItem("user_email"),
            payment_id: data.id,
            order_id: data.receipt,
        }
        const res = await fetch('http://localhost:3000/api/verifypayment',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)

            })
        const users = await res.json()
        return users
    }

    async function register_course() {
        const res = await fetch(`http://localhost:3000/api/registeredcourses/${sessionStorage.getItem("user_email")}`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})

            })
        const users = await res.json()
        return users
    }

    async function register_id() {

        for (let id of JSON.parse(sessionStorage.getItem("cart"))) {
            const res = await fetch(`http://localhost:3000/api/registeredcourses/${sessionStorage.getItem("user_email")}`,
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ courseid: id })

                })
            const users = await res.json()
            await users
        }
    }

    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load')
            return
        }

        const razorpay_details = await fetch('http://localhost:3000/api/payment/orders',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount: calculate_total() })

            })
            .then((response) =>
                response.json()
            )

        const options = {
            key: process.env.REACT_APP_KEY_ID,
            currency: razorpay_details.data.currency,
            amount: razorpay_details.data.amount.toString(),
            order_id: razorpay_details.data.id,
            name: 'Big Buddy Consultancy',
            description: 'Payment for respective courses',
            image: 'http://localhost:3001/logo.svg',
            handler:
                function (response) {
                    verifypayment(response).then(() => {
                        verified(razorpay_details.data).then(
                            register_course().then(
                                register_id()
                            )
                        )
                    })

                    // alert(response.razorpay_payment_id)
                    // alert(response.razorpay_order_id)
                    // alert(response.razorpay_signature)
                },
            prefill: {
                name: "yogesh",
                email: 'sdfdsjfh2@ndsfdf.com',
                phone_number: '9899999999'
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    return (
        <>
            <header id={styles.site_header}>
                <div className={styles.container}>
                    <h1>Checkout </h1>
                </div>
            </header>

            <div className={styles.container}>

                <section id={styles.cart}>
                    <CartItem course={courses} removeId={removeProduct} />
                </section>

            </div>

            <footer id={styles.site_footer}>
                <div className={`${styles.container} ${styles.clearfix}`}>
                    <div className={styles.right}>
                        <h3 className={styles.total}>Total: ₹<span>{calculate_total()}</span></h3>
                        <a className={styles.btn} onClick={displayRazorpay}>Checkout</a>
                    </div>

                </div>
            </footer>
            <br />
            <br />
        </>
    )
}