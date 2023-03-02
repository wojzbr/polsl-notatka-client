import { AiOutlineArrowLeft, AiOutlineSave, AiOutlineCamera, AiOutlinePrinter, AiOutlineDelete } from "react-icons/ai";
import RichtextToolbar from './richtextToolbar/RichtextToolbar';
import './toolbar.css'


// THIS FILE CONTAINS ROUTING THAT WILL NEED TO BE UPDATED

const Toolbar = ({username, id, apiUrl}) => {

    var searchParams = new URLSearchParams(window.location.search);

    return (
        <div id="toolbar-wrapper">
            <div id="toolbar-content">
                <div id="toolbar-navigation">
                    <a className="toolbarButton" href="/polsl-notatka-client" id="return-button"><AiOutlineArrowLeft size={20} style={{fill: 'white', margin: "3px"}}/> POWRÓT</a>
                    
                    <button className="toolbarButton" type="button" id="saveButton" style={localStorage.getItem("token")?{}:{display: "none"}} onClick={ ()=>{
                        document.getElementById("saveButton").style.background = "green"
                        // submitAndPost(id)
                        setTimeout(()=>{
                        //document.getElementById("saveButton").style.background = "#183557"

                        // ZAMIAST TIMEOUTU ZACZEKAĆ NA RESPONSE Z API

                        window.location.reload()
                        }, 1000)
                        } }>
                        <AiOutlineSave size={20} style={{fill: 'white', margin: "3px"}}/> ZAPISZ
                    </button>

                    <button className="toolbarButton" onClick={()=>window.print()}>
                        <AiOutlinePrinter size={20} style={{fill: 'white', margin: "3px"}}/> DRUKUJ / PDF
                    </button>
                    {
                    username=="admin"?
                    (<button className="toolbarButton" onClick={()=>{
                        if (window.confirm("Czy na pewno chcesz usunąć ten formularz? Operacji nie będzie można cofnąć.")) {
                            // deleteForm(id)
                        }
                    }}>
                        <AiOutlineDelete size={20} style={{fill: 'white', margin: "3px"}}/> USUŃ
                    </button>)
                    :null
                    }
                </div>
                <RichtextToolbar />
            </div>
        </div>
    )
}

export default Toolbar;
