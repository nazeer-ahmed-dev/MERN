import React from "react";

export default class LifeCycle extends React.Component
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
        this.timerId = setInterval(()=>{this.tick()},1000)
            
    }
    componentDidUpdate()
    {

    }
    componentWillUnmount()
    {
            clearInterval(this.timerId)
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
            <div className="jsx_practise">
                    <h1>Time : {this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }

}