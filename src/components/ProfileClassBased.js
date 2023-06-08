import React from "react";

class ProfileClass extends React.Component{

    constructor(props){
        super(props);
        console.log('class - constructor');
        this.state={
            count:0 ,
            userInfo:{
                name: 'Dummy name',
                location: 'dummy location',
                avatar_url: ''
            }
         };
    }
    async componentDidMount(){
        console.log('class- component did mount');
        const users=await fetch('https://api.github.com/users/raju');
        const dataUser=await users.json();
      this.setState({
         userInfo:{
            ...dataUser,
         }
      })
     this.timer= setInterval(()=>{
      console.log('timeout');
      },1000)
    }

    componentDidUpdate(prevprops,prevstate){
        console.log('class-  compnent did update'+prevstate.count)

    }
    componentWillUnmount(){
    console.log('class- Component will un mount')
    //clean up for unmount
    clearInterval(this.timer);
}
    render(){
        console.log('class - render')
        return(
            <>
            <h1>Profile class - {this.props.nameP}</h1>
            <h2>Count value : {this.state.count}</h2>

            <br/>
            name: {this.state.userInfo.name}<br/>
            location: {this.state.userInfo.location}<br/>
            image:  <img src={this.state.userInfo.avatar_url}/><br/>

            <br/>
            <button onClick={()=>{
                this.setState(prev=>{
                    return {
                     count:prev.count+1,
                    };
                })
            }} > Count </button>
            </>
        )
    }
}

export default ProfileClass;