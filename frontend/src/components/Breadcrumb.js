import bg3 from "../assets/img/bg/3.png"
const divStyle = {
    backgroundImage: 'url(' + bg3 + ')',
}

export default function Breadcrumb(props) {
    return (
        <div className="breadcrumb-area bg-overlay" style={divStyle}>
            <div className="container">
                <div className="breadcrumb-inner">
                    <div className="section-title mb-0 text-center">
                        <h2 className="page-title">{props.text}</h2>
                        <ul className="page-list">
                            <li><a href="/">Home </a></li>
                            <li> {props.text}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}