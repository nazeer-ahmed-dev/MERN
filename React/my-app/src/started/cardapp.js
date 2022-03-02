import React from "react"
import axios from 'axios';
const testData = [
{name: "Nazeer", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
{name: "Haseeb", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
{name: "Umair", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
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
        <div>
             <div className="header">{this.props.title}</div>
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
        <div className="github-profile" style={{margin:'1rem'}}>
            <img src={profile.avatar_url} alt="Foo eating a sandwich." style={{height:'75px' , width:'75px'}}/>
            <div className="info" style={{display:'inline-block',marginLeft:10}}>
                <div className="name" style={{fontSize:'125%',color:Math.random() > 0.5 ? 'green':'reed'}}>{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>

        </div>
        )
    }
}

const Cardlist = (props) =>{
   
   return <div>
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
            <form onClick={this.handleFunction}>
                <input type="text" placeholder="Username"  value = {this.state.userName} onChange={event => this.setState({userName:event.target.value})}/>
                <button>Add Card</button>
            </form>
        )
    }
}