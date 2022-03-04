import React from "react";

class LifeCycle extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            time:new Date(),
        }
    
    }

    componentDidMount()
    {
      
            
    }
    componentDidUpdate()
    {

    }
    componentWillUnmount()
    {
            clearInterval()
    }
    tick()
    {
        this.setState({
            time:new Date()
        })
    }
    render()
    {
        return(
            <div>
                    <h1>Time : {this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }

}