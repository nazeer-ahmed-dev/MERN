import React from "react";

export default class EventHandling extends React.Component
{
        constructor(props)
        {
            super(props)
            this.state = {
               color:"btn btn-primary p-5",
               trigger:true,
            };

            this.handlClick = this.handlClick.bind(this)
        }
        handlClick()
        {
            this.setState(prevState=>({
                color : this.state.trigger ? "btn btn-primary p-5":"btn btn-info p-5",
                trigger:!prevState.trigger
            }))
        }
        render()
        {
            return(
                <button className={this.state.color}  onClick={this.handlClick}>
                             {this.state.trigger ?  "ON":"OFF"}
                </button>
            )
        }
}