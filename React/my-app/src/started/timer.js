import React  from "react";

function Timer()
{
        return <div>
              <pre>time : 
                  {new Date().toLocaleString()}
              </pre>          
        </div>
}

setInterval(Timer,1000);

export default Timer;