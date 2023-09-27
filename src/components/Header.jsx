import { NavLink } from "react-router-dom"
import './header.css'

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>Les formateurs</NavLink>
                </li>
                <li>
                    <NavLink to='/articles'>Les articles</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header