import React from "react";

export default class Form extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isChecked : false,
            name:"",
            image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
            cms:"",
            selectOp:"",
            gender:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.click = this.click.bind(this);
           
    }
    click()
    {
        this.setState({
            isChecked:true,
        })
    }
    handleChange(event)
    {
        
           const target = event.target
           const value = target.value
           const name = target.name
        if(name==="image")
        {
            const reader = new FileReader();
            reader.onload=()=>{
                if(reader.readyState===2)
                {
                    this.setState({image:reader.result})
                    console.log(reader.result)
                }
            }
            reader.readAsDataURL(event.target.files[0])
        }
        else
        {
            
           this.setState({
            [name]:value
        })
    
        }
    }
    componentDidMount()
    {

    }
    render()
    {
            return(
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <center><div>
                            <h1>Enter Your Data!!!</h1>
                        </div></center>
                        <div class="input-group mb-3">
                            <input name="image"  accept="image/*" type="file" class="form-control" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input name="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                            <Comp valu={this.state.name}/>
                        </div>
                        <div>
                            <input name="cms" className="form-control" placeholder="CMS-ID" value={this.state.cms} onChange={this.handleChange}/>
                            <Comp valu={this.state.cms}/>
                        </div>
                        <div>
                        <select name="selectOp" class="form-select" aria-label="Default select example" value={this.state.selectOp} onChange={this.handleChange}>
                            <option value="bba">BBA</option>
                            <option value="cs">CS</option>
                            <option value="se">SE</option>
                            <option value="ee">EE</option>
                        </select>
                        </div>
                        <div className="m-4">
                            <div class="form-check">
                                <input name="gender" class="form-check-input" type="radio" value="Male" id="flexRadioDefault1" checked={this.state.gender === "Male"} onChange={this.handleChange}/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                 Male
                                </label>
                            </div>
                                <div class="form-check">
                                <input name="gender" class="form-check-input" type="radio" value="Female" id="flexRadioDefault2" checked={this.state.gender === "Female"} onChange={this.handleChange}/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                Female
                                </label>
                            </div>
                            {/* <center><div className="d-grid gap-2 col-6 mx-auto">
                                     <button type="button" class="btn btn-info" onClick={this.click}>ADD</button>
                            </div></center> */}
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        {/* {this.state.isChecked ? */}
                         <div class="card text-center m-2 "  style= {{width:'18rem'}}>
                            
                            <img src={this.state.image}  className="card-img-top img-thumbnail" alt="Not Found" style={{height:"300px"}}/>
                            <div class="card-body">
                            <h3 className="card-title"> {this.state.name}</h3>
                            <h4 className="card-title"> {this.state.cms}</h4>
                            <h5 className="card-title"> {this.state.selectOp}</h5>
                            <p class="card-text">{this.state.gender}</p>
                        </div>
                    </div>
                    {/* :<div></div>} */}
                    </div>
                </div>

            )
    }
    
    
}
function Comp(props)
{
        return( <div style={{margin:"1rem"}}><h6>{props.valu}</h6></div>)
}