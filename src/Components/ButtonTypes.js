import React from 'react'

function ButtonTypes(props) {
    return (
        <div className="row">
            {props.buttons.map((button)=>
                <button key={button} className="col-md-1 mx-3 btn btn-info" onClick={()=>props.buttonOnClick(button)}>
                    {button[0].toUpperCase() + button.slice(1)}
                </button>
            )}
        </div>
    )
}

export default ButtonTypes
