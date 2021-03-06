import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/images/logo.svg'
import { FaAlignRight } from "react-icons/fa";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    <button className="nav-btn" type="button" onClick={() => setIsOpen(!isOpen)}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <Link to="/">Home</Link>
                    <Link to="/rooms">Rooms</Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
