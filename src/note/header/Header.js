import logoPS from "../../media/logoPS.png"
import logoUczelniaBadawcza from "../../media/logoUczelniaBadawcza.png"

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

            <div className="meetingId">
                ID SPOTKANIA
                <div className="meetingIdWrapper">
                    <span style={{border: "1px solid transparent"}}>RJO4/</span>
                    <p contentEditable={contentEditable} className="meetingId">{(offer_id)}</p>
                </div>
            </div>   

        </div>
    )
}

export default Header;