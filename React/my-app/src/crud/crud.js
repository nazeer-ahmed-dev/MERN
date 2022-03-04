import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

// data = fetch("http://localhost:3001/food").then(res=>{res.json()})
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
              post(Val, Q);
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
    
 
              <GetData/>
        </tbody>
      </table>
      </div>

    </div>
  );
}




function post(val,q)
    {
        fetch('http://localhost:3001/food',{
            method:'POST',
            body:JSON.stringify(
                {
                    foodName:val,
                    daysSinceIAate:q,
                }
            ),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(res=>res.json()).then(data=>console.log(data))
    }
  function GetData()
{
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/food').then(res=>{console.log(res); setPosts(res.data)}).then(err=>{console.log(err)})
    
  })

  return posts.map((student,index) => {
    const { _id,foodName,daysSinceIAate } = student //destructuring
    return (
       <tr id={_id}>
            <th scope="row">{index}</th>
          <td>{foodName}</td>
          <td>{daysSinceIAate}</td>
          <td className="d-flex justify-content-around">
              <button id={_id} type="button" class="btn btn-primary"onClick={(e)=>{
                Delete(e.target.id)
              }} >Delete</button>
              <button type="button" class="btn btn-primary">Edit</button>
              <button type="button" class="btn btn-primary">Duplicate</button>
              </td>
       </tr>
    )
 })
}
  // function showDate() {

  //         return <tr>
  //           <th scope="row">1</th>
  //             <td>hello</td>
  //         </tr>

  //       // const data = await fetch('http://localhost:3001/food').then(res =>res.json()).then(err=>console.log(err))
  //       // console.log(data)
  //       // data.map((value)=>{
  //       //     return  <tr>
  //       //     <th scope="row">1</th>
  //       //     <td>{value.foodName}a</td>
  //       //     <td>{value.daysSinceIAate}</td>
  //       //     <td className="d-flex justify-content-around">
  //       //         <button type="button" class="btn btn-primary">Delete</button>
  //       //         <button type="button" class="btn btn-primary">Edit</button>
  //       //         <button type="button" class="btn btn-primary">Duplicate</button>
                
  //       //         </td>
            
  //       //   </tr>
              
  //       // })
            
      
  //     }

//   async function getData()
// {
//   data = await fetch('http://localhost:3001/food').then(res =>res.json()).then(err=>console.log(err))
//   setdat(data)
//   console.log(dat[0].foodName)
// }
// getData()


function Delete(va)
{
   fetch('http://localhost:3001/food/'+va,{
      method: 'DELETE'
     })
}