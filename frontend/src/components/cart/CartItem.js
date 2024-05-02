import styles from "./Cart.module.css"

export default function CartItem(props) {    

    return (
        <>
            {/* {console.log(props)} */}
            {props.course.map((ele) => (
                <article className={styles.product} key={ele._id}>

                    <header>
                        <a className={styles.remove}>
                            <img src={require("../../assets/img/course/1.png")} alt="" />

                            <h3 onClick={()=>{props.removeId(ele._id)}} >Remove product</h3>
                        </a>
                    </header>

                    <div className={styles.content}>

                        <h1>{ele.title}</h1>
                        {ele.desc}
                    </div>

                    <footer className={styles.content}>

                        {/* <h2 className={styles.full_price}>
                            {ele.price}
                        </h2> */}

                        <h1 className={styles.price}>
                        ₹ {ele.price}
                        </h1>
                    </footer>
                </article>
            ))}
        </>

    )
}