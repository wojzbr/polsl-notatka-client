import React from 'react'
import logoCITT from "../../media/Logo CITT.jpg"
import logo100innovations from "../../media/Logo 100 innovations.png"
import './footer.css'

const Footer = () => {

    var searchParams = new URLSearchParams(window.location.search);

    return (
        <div className="footerWrapper border-primary">
            <div className="logoWrapper footerLogo">
                <img alt="CITT logo" src={logoCITT} />
            </div>
            <div>
                <>
                CENTRUM INKUBACJI I TRANSFERU TECHNOLOGII<br/>
                POLITECHNIKI ŚLĄSKIEJ<br/>
                ul. Stefana Banacha 7<br/>
                44-100 Gliwice<br/>        
                </>
            </div>
        </div>
    )
}

export default Footer;