import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <nav className="header-main">
            <NavLink to="/" className={({isActive})=> `nav-link ${isActive && "selected"}`}>Home</NavLink>
            <NavLink to="/archive" className={({isActive})=> `nav-link ${isActive && "selected"}`}>Archive</NavLink>

        </nav>
    )
}


export default Header