import React, { useState } from "react";
export default function Comp_and_props()
{
    const [text,settext] = useState(0)
    return <div>
        <div>
             <input placeholder="initial value"/>
             <button>Click me</button>
        </div>
        <div>
        <Calcu valu={text}/>
        </div>
     </div>
}
function Calcu(props)
{
    const [value , setValue] = useState(props.valu);
    

    return <div >
            <button onClick={()=>{
                setValue(value+1)
            }} style={{display:"inline-block"}}>+</button>
            <p style={{display:"inline-block",marginLeft:"10px" , marginRight:"10px"}}>{value}</p>
            <button  onClick={()=>{
                setValue(value-1)
            }} style={{display:"inline-block"}}>-</button>
    </div>
}

