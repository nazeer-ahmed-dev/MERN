import React, { useState } from "react";
import "../App.css";
export default function Crud() {
  const [Val, setVal] = useState();
  const [Q, setQ] = useState();

  return (
    <div className="insert_data row">
     <div className="col-md-6 col-sm-12">  
      <div>
        <h1 className="text-center">Insert Food Data</h1>
        <div>
          <input className="form-control"
            // style={{ height: "40px", width: "400px", margin: "1rem" }}
            placeholder="Name"
            value={Val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <input className="form-control my-4"
            // style={{ height: "40px", width: "400px", margin: "1rem" }}
            placeholder="Quantity"
            value={Q}
            onChange={(e) => {
              setQ(e.target.value);
            }}
            required
          />
        </div>


        <div className="d-flex justify-content-evenly">
        <button type="button" class="btn btn-primary d-block" onClick={() => {
              AddDAta(Val, Q);
            }}>ADD</button>
           
        </div>
        
      </div>
      </div>

<div className="col-md-6 col-sm-12" >
      <table
        class="table table-striped"
        // style={{  marginTop: "-300px", marginRight: "40px" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td className="d-flex justify-content-around">
                <button type="button" class="btn btn-primary">ADD</button>
                <button type="button" class="btn btn-primary">ADD</button>
                <button type="button" class="btn btn-primary">ADD</button>
                
                </td>
            
          </tr>
        </tbody>
      </table>
      </div>

    </div>
  );
}
function AddDAta(val, Q) {
  console.log(val, Q);
}
