import React, { useState,useEffect } from 'react'

function InputDetails(props) {
    const [inputFieldDetails , setInputFieldDetails] = useState(props.inputFieldDetails)
    useEffect(() => {
        setInputFieldDetails(props.inputFieldDetails);
    }, [props.inputFieldDetails])
    return (
        <div className="m-3 p-3 border border-dark rounded">
            {Object.keys(props.inputFieldDetails).map(key=>{
                if(key !== 'type'){
                    if(key !== 'options'){
                        return <div className="form-group" key={key}>
                                    <label htmlFor="exampleInputEmail1">{key}</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder={key} onChange={(text)=>{
                                        Object.keys(inputFieldDetails).map(objkey=>{
                                            if(objkey === key){
                                                inputFieldDetails[key] = text.target.value
                                            }
                                        })
                                    }}/>
                                </div>
                    }else{
                        return <div className="form-group" key={key}>
                                    <label htmlFor="exampleInputEmail1">{key}</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder={key}/>
                                </div>
                    }
                }
            })}
            <button className="btn btn-info" onClick={()=>{
                props.InputDetailsSubmit(inputFieldDetails)
                }}>Submit</button>
        </div>
    )
}

export default InputDetails
