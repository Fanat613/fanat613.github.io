import React from 'react'
import {Link} from "react-router-dom"
import './Menu.css'
const Menu = () => {
    return (

            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
					<li><Link to="/About Me">About Me</Link></li>
					<li><Link to="/Design Services">Design Services</Link></li>
					<li><Link to="/Reguest Quote">Reguest Quote</Link></li>
					<li><Link to="/Advertise">Advertise</Link></li>
					<li><Link to="/Contact Me">Contact Me</Link></li>
                </ul>
            </div>
    )
}
export default Menu