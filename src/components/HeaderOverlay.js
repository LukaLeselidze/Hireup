import React from 'react'
import './HeaderOverlay.css';

function HeaderOverlay() {
    return (
        <div className='header_overlay'>
            <nav className='overlay_content'>
                <a>Home</a>
                <a>Company</a>
                <a>Browse</a>
                <a>Blog</a>
                <div className='overlay_button_mobile'>
                    <a>Login</a>
                </div>
            </nav>
        </div >
    )
}

export default HeaderOverlay