import React from "react"
import axios from 'axios';
const testData = [

];

export default class App extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         profi : testData,
    //     };
    // }
    // shorthand 
    state = {
        profi : testData,
    }
    addNew = (profileData) =>{
        console.log('App',profileData);
        this.setState(prevState=>({
            profi: [...prevState.profi , profileData],
        }))
    }
    render()
    {
        return (
        <div  className="jsx_practise">
             <div >{this.props.title}</div>
             <Form onSubmit={this.addNew}/>
             <Cardlist prof={this.state.profi}/>

        </div>
        )

    }
}
class Card extends React.Component
{
    render()
    {
        const profile = this.props;
        return (
                    
               <div class="card  m-2 "  style= {{width:'18rem'}}>
            <img src={profile.avatar_url} className="card-img-top" alt="Not Found"/>
            <div class="card-body">
              <h5 class="card-title">{profile.name}</h5>
              <p class="card-text">{profile.company}</p>
            </div>
          </div>
           

        )
        {/* <div className="github-profile" style={{margin:'1rem'}} >
            <img src={profile.avatar_url} alt="Foo eating a sandwich." style={{height:'75px' , width:'75px'}}/>
            <div className="info" style={{display:'inline-block',marginLeft:10}}>
                <div className="name" style={{fontSize:'125%',color:Math.random() > 0.5 ? 'green':'reed'}}>{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>

        </div> */}
    }
}

const Cardlist = (props) =>{
   
   return <div className = "d-flex justify-content-evenly">
       {
           props.prof.map((value)=>{ return <Card key={value.id} {...value}></Card>})
       }
        
    </div>
}
class Form extends React.Component
{
    state = {
        userName : '',
    }
   // userInput = React.createRef();
    handleFunction = async (event) => {
            event.preventDefault();
            const resp = await  axios.get(`https://api.github.com/users/${this.state.userName}`);
            
        this.props.onSubmit(resp.data)
        this.setState({userName:''})
         //       this.userInput.current.value
            
    }
    render()
    {
        return(
            <form onClick={this.handleFunction} className="jsx_practise m-4">
                <h1>Github Api</h1>
                <br/>
                <input className="form-control my-2 " type="text" placeholder="Username"  value = {this.state.userName} onChange={event => this.setState({userName:event.target.value})}/>
                <button className="btn btn-info">Add Card</button>
            </form>
        )
    }
}