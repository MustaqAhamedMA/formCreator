import React, { useState,useEffect } from 'react'

function MainInput(props) {
    return (
        props.inputDetails.length != 0 && 
        <div className="m-3 p-3 border border-dark rounded">
            {props.inputDetails.map(input => {
                return <div className="form-group">
                <label htmlFor="exampleInputEmail1">{input.label}</label>
                <input type={input.type} className="form-control" id="exampleInputEmail1" placeholder={input.placeholder}/>
            </div>
            })}
        </div>
    )
}

export default MainInput
