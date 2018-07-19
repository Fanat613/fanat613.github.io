import React from 'react'
import './Header.css'

import Logo from './Logo/logo.js'
import Menu from './Menu/Menu.js'
import Menu2 from './Menu/Menu2.js'

const Header = () => {
    return (
        <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Logo/>
                        </div>
                    </div>
                </div>
                <div className="container">
			        <div className="row">
                        <div className="col-lg-8">
                            <Menu/>
                        </div>
                    
                        <div className="col-lg-4">
                            <Image/>
                        </div>
                    </div>
                </div>
                <div className="container">
			        <div className="row">
                        <div className="col-lg-12">
                            <Menu2/>
                        </div>
                    </div>
                </div>
            </header>
    )
}
            export default Header