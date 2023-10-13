
import { Link } from "react-router-dom";

const Logo = ({ img }) => {
    return (
        <Link to='/home'>
            <img src={`/images/${img}.jpg`} alt={img} className="h-12" />
        </Link>
    )
}

export default Logo