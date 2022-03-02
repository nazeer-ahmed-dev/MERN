import React, { useState } from "react";
import '../App.css';
export default function Comp_and_props()
{
    const [text,settext] = useState(0)
    const [value , setValue] = useState(0)
    return <div className="jsx_practise">
        <div>
             <input placeholder="initial value" value={text} onChange={event => {settext(event.target.value); setValue(text)}}/>
        </div>
        <div>
        <button  onClick={()=>{
                setValue(value+1);
                settext(0);
            }} style={{display:"inline-block"}}>+</button>
            <p style={{display:"inline-block",marginLeft:"10px" , marginRight:"10px"}}>{value}</p>
            <button onClick={()=>{
                setValue(value-1)
                settext(0)
            }} style={{display:"inline-block"}}>-</button>
        </div>
     </div>
}


