import React, { useState }  from "react";
let list = []

export default function Todo()
{   
    const [Value , SetValue ] = useState(list)
    const [text , setText] = useState()

    return(
        <div className=" position-absolute  start-50 translate-middle-x col-5">        
            <div>
            <div>
                            <input className="form-control my-4"
                                placeholder="Item"
                                required
                                value={text} onChange={(e)=>{setText(e.target.value)}}
                               
                            />
                        </div>

                        <div className="d-flex justify-content-evenly">
                            <button type="button" class="btn btn-primary d-block" onClick={()=>{SetValue([...Value , text])}}>Add
                            </button>
                        </div>
            </div>
            <div className="m-2">        
                {
                    Value.map((item)=>{
                    return<div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{item}</strong> 
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                })}
            </div>
        </div>


    )
}