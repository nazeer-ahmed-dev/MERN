import React, { useState } from "react";

export default function ConditionalRendring()
{
    const[value , setvalue] = useState(true)
        return <div className="row">
                <div className="col-md-5 col-sm-12">
                    <button className="btn btn-primary m-5 p-5" onClick={()=>{setvalue(true)}}>
                        Login
                    </button>
                    <button className="btn btn-info m-5 p-5" onClick={()=>{setvalue(false)}}>
                        SignUp
                    </button>
                </div>
                <div className="col-md-7 col-sm-12">
                    <Tocall val = {value}/>
                </div>
        </div>
}
function Tocall(props)
{
    if(props.val)
    {
    return(
        <div>
            <div className="insert_data row">
                <div className="col-md-6 col-sm-12">  
                    <div>
                        <h1 className="text-center">LogIn</h1>
                            <div>
                                <input className="form-control"
                                // style={{ height: "40px", width: "400px", margin: "1rem" }}
                                placeholder="username"
                                required
                                 />
                            </div>
                        <div>
                            <input className="form-control my-4"
                                // style={{ height: "40px", width: "400px", margin: "1rem" }}
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="d-flex justify-content-evenly">
                            <button type="button" class="btn btn-primary d-block" >LogIn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
    else{
    return(
        <div>
            <div className="insert_data row">
                <div className="col-md-6 col-sm-12">  
                    <div>
                        <h1 className="text-center">SignUp</h1>
                            <div>
                                <input className="form-control"
                                // style={{ height: "40px", width: "400px", margin: "1rem" }}
                                placeholder="username"
                                required
                                 />
                            </div>
                        <div>
                            <input className="form-control my-4"
                                // style={{ height: "40px", width: "400px", margin: "1rem" }}
                                placeholder="New Password"
                                required
                            />
                        </div>
                        <div>
                            <input className="form-control my-4"
                                // style={{ height: "40px", width: "400px", margin: "1rem" }}
                                placeholder="Confrim Password"
                                required
                            />
                        </div>

                        <div className="d-flex justify-content-evenly">
                            <button type="button" class="btn btn-primary d-block" >SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}