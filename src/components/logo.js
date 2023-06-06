import { Link, useParams } from "react-router-dom";

export default function Logo() {
    const { user_id } = useParams()
    return (
        <Link to={user_id ? "/user/" + user_id : '/'} className="logo font-extralight text-4xl">
            rentmy<span className="font-bold">Castle</span>
        </Link>
    )
}