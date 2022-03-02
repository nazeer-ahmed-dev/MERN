import React, { useState } from 'react';
function Increment()
{
    const [counter , setCounter ] = useState(0);
    const handleClick = () =>{
        setCounter(counter+1)
    }
    return <button onClick={handleClick}>{counter}</button>;
}

function Text(props)
{
    return <p>{props.message}  {props.val}</p>
}
function ToAdd()
{
    return <div>
        <Text message={"incrementing"} val={"1"} />
        <Increment/>
        
    </div>
}
export default ToAdd;