import React from 'react'
import {Link} from "react-router-dom"
import './Menu2.css'

const Menu2 = () => {
    return (

            <div className="menu2">
                <ul>
                    <li><Link to="/INSIPRATION">INSIPRATION</Link></li>
					<li><Link to="/TECHNOLOGY">TECHNOLOGY</Link></li>
					<li><Link to="/FREEBIES">FREEBIES</Link></li>
					<li><Link to="/WORDPRESS">WORDPRESS</Link></li>
					<li><Link to="/TUTORIALS">TUTORIALS</Link></li>
					<li><Link to="/FONTS">FONTS</Link></li>
					<li><Link to="/WALLPAPERS">WALLPAPERS</Link></li>
                </ul>
            </div>
    )
}
export default Menu2