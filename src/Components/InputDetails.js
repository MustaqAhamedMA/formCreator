import React, { useState } from 'react'

function InputDetails(props) {
    const [inputFieldDetails , setInputFieldDetails] = useState({})
    return (
        <div className="m-3 p-3 border border-dark rounded">
            {Object.keys(props.inputFieldDetails).map(key=>{
                if(key !== 'options'){
                    return <div class="form-group">
                                <label for="exampleInputEmail1">{key}</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder={key}/>
                            </div>
                }else{
                    return <div class="form-group">
                                <label for="exampleInputEmail1">{key}</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder={key}/>
                            </div>
                }
            })}
            <button className="btn btn-info" onClick={()=>{props.InputDetailsSubmit()}}>Submit</button>
        </div>
    )
}

export default InputDetails
