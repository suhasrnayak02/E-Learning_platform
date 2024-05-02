import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Dropdown.module.css'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid success`,
        padding: '0 4px',
    },
}));

const divStyle = {
    "height": "12vh"
}

export default function Navbar() {

    const [isCookie, setCookie] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        checkcookie()
    }, [isCookie])

    function checkcookie() {
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            if (c.substring(0, 5) == "token") {
                setCookie(true)
                return
            }
        }
        setCookie(false)
    }

    function getcartproducts() {
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            if (c.substring(1, 5) == "cart") {
                return (JSON.parse(c.substring(6))).length
            }
        }
        return 0
    }

    function handlelogout() {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        checkcookie()
        navigate("../")
    }

    function handlecourses() {
        navigate("../mycourses")
    }

    return (
        <div className="navbar-area">
            {/* <!-- navbar top start --> */}
            <div className="navbar-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 text-md-left text-center">
                            <ul>
                                {/* <!-- <li><p><i className="fa fa-map-marker"></i> 2072 Pinnickinick Street, WA 98370</p></li> --> */}
                                <li><p><i className="fa fa-envelope-o"></i>admin@bigbuddy.in</p></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="topbar-right text-md-right text-center">
                                <li className="social-area">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-area-1 navbar-area navbar-expand-lg" style={divStyle}>
                <div className="container nav-container">
                    <div className="responsive-mobile-menu">
                        <button className="menu toggle-btn d-block d-lg-none" data-target="#edumint_main_menu"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-left"></span>
                            <span className="icon-right"></span>
                        </button>
                    </div>
                    <div className="logo">
                        <img src={require("../assets/img/header-logo.png")} width="250.75rem" alt="img" />
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                        <a className="signin-btn" href="signin">Sign In</a>
                        <a className="btn btn-base" href="signup">Sign Up</a>
                        <a className="search-bar" href="#"><i className="fa fa-search"></i></a>
                    </div>
                    <div className="collapse navbar-collapse" id="edumint_main_menu">
                        <ul className="navbar-nav menu-open">
                            <li>
                                <a href="/">Home</a>
                                {/* <!-- <ul className="sub-menu">
                                <li><a href="index.html">Home 01</a></li>
                                <li><a href="index-2.html">Home 02</a></li>
                                <li><a href="index-3.html">Home 03</a></li>
                            </ul> --> */}
                            </li>
                            <li>
                                <a href="course">Course</a>
                                {/* <ul className="sub-menu">
                                    <li><a href="course">Course</a></li>
                                </ul> */}
                            </li>
                            {/* <li className="menu-item-has-children">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li><Link to="../about">About Us</Link></li>
                                    <li><Link to="#">Event</Link></li>
                                    <li><Link to="#">Event Details</Link></li>
                                    <li><Link to="../team">Team</Link></li>
                                    <li><Link to="../team-details">Team Details</Link></li>
                                    <li><Link to="../pricing">Pricing</Link></li>
                                    <li><Link to="../gallery">Gallery</Link></li>
                                </ul>
                            </li> */}
                            {/* <li><Link to="../team">Team</Link></li> */}
                            <li><Link to="../about">About us</Link></li>
                            <li><Link to="../contact">Contact Us</Link></li>


                        </ul>
                    </div>
                    <div className="nav-right-part nav-right-part-desktop">

                        {isCookie
                            ?
                                    <div className={styles.dropdown}>
                                        <a className={styles.dropbtn}>
                                            <IconButton>
                                                <AccountCircleIcon />
                                            </IconButton>
                                        </a>
                                        <div className={styles.dropdown_content}>
                                            <div onClick={handlelogout}>Logout</div>
                                            <div onClick={handlecourses}>My courses</div>
                                        </div>
                                    </div>
                            : <>
                                <Link className="signin-btn" to="../signin">Sign In</Link>
                                <Link className="btn btn-base" to="../signup">Sign Up</Link>
                            </>
                        }


                        <IconButton aria-label="cart" href={isCookie ? "../cart" : "../signin"}>
                            <StyledBadge badgeContent={getcartproducts()} color="success">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </div>
                </div>
            </nav>
        </div>
    )

}