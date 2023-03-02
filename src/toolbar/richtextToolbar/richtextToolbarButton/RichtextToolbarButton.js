import React from 'react'

import executeCommand from '../../../methods/executeCommand'

import './richtextToolbarButton.css'

const RichtextToolbarButton = ({ title, className="richtextToolbarButton", action, value=null, text }) => {
    return (
        <button
            title={title}
            className={className}
            onMouseDown={(e)=>e.preventDefault()}
            id={`btn-${action}`}
            onClick={()=>{
                console.log(action)
                if (document.activeElement.id!=="title") executeCommand(action, value)
                else if (action !== "bold") executeCommand(action, value)
            }}
        >
            {text}
        </button>
    )
}

export default RichtextToolbarButton;