import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <span className="span">
                <p>
                    <NavLink to="/">Home</NavLink>
                </p>
                <p>
                    <NavLink to="/news">News</NavLink>
                </p>
                <p>
                    <NavLink to="/about">About</NavLink>
                </p>
                <p>
                    <NavLink to="/contact">Contact</NavLink>
                </p>
            </span>
        </>
    )
}

export default Navbar