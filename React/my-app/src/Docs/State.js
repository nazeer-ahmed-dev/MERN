import React, { useState } from "react"
import ReactDOM from 'react-dom';

// ticking Clock example

export default function Tick()
{
    const [time ,setTime] = useState(new Date().toLocaleString())
    setInterval(toChange,1000);
    return <div>
                <h1>Time : {time}</h1>
    </div>
    function toChange() {
            setTime(new Date().toLocaleString())
    }  
}