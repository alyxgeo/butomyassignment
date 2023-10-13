import { Link } from "react-router-dom"

const LinkButton = ({ children, to }) => {


    return (
        <button className="p-2 bg-rose-300 rounded">
            <Link to={to}>{children}</Link>
        </button>
    )
}

export default LinkButton