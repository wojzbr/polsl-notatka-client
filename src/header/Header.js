import React, { useEffect } from 'react'

import logoPS from "../media/logoPS.png"
import logoPS_ENG from "../media/logoPS_ENG.jpg"
import logoUczelniaBadawcza from "../media/logoUczelniaBadawcza.png"
import logoUczelniaBadawcza_ENG from "../media/logoUczelniaBadawcza_ENG.png"

import './header.css'

const Header = ({title, title_id, offer_id, contentEditable="true"}) => {

    var searchParams = new URLSearchParams(window.location.search);
    
    return (
        <div className="headerWrapper border-primary">

            <div className="logoWrapper headerLogo">
                <img alt="" src={logoPS} />
                <img alt="" src={logoUczelniaBadawcza} />
            </div>

            <div className="heading">
                
                <h1>NOTATKA ZE SPOTKANIA</h1>
                
            </div>

            <div className="offerID">
                ID OFERTY
                <div id="offer_id_wrapper"><span style={{border: "1px solid transparent"}}>RJO4/</span><p contentEditable={contentEditable} className="offer_id" id="offer_id">{(offer_id)}</p></div>
            </div>   

        </div>
    )
}

export default Header;