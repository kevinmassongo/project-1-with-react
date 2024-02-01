import { NavLink } from "react-router-dom";

function Navbar () {
    return (
        <>
            <span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </span>
        </>
    )
}

export default Navbar