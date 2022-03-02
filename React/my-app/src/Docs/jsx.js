import '../App.css';
import axios from 'axios';
import { useState } from 'react';
const name = {
    "firstName":"Nazeer",
    "lastName":"Ahmed"
}
let link = "df"
const conactination= () => {return name.firstName + " "+name.lastName;}

export default function Empbeding_expression_into_jsx()
{
    const [pic, setPic] = useState("https://avatars2.githubusercontent.com/u/63648?v=4");
    const gettingpic = async () => {
        const resp = await  axios.get("https://api.github.com/users/nazeerahmedofficial");
        setPic("https://avatars.githubusercontent.com/u/86837841?v=4")
    }
    gettingpic()
    return <div className="jsx_practise">
            <img src={pic} alt="pic" style={{width:"75px",height:"75px"}}/>
        <div style={{display:"inline-block" , marginLeft:"20px"}}> 
            <h2>Working on React....</h2>
            <h2>Hi , {conactination()} </h2>
    </div></div>
    
}

