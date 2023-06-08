import React, { useEffect, useState } from "react";


const ProfileFunction =()=>{

  const[user,setUser]=useState({
    userInfo:{
        name: 'dummy',
        location: 'dummy location',
        avatar_url: ''
    }
  })
    useEffect(()=>{
        fetchUser();
   console.log('fun useeffect')
   let timer=setInterval(()=>{
    console.log('fun timers')
},1000);
 
 return (()=>{
    console.log('cleanup class based profile')
    clearInterval(timer)
 })
    },[])

    const fetchUser= async()=>{
        const userData=await fetch('https://api.github.com/users/rajugm1991');
        const data= await userData.json();
        console.log(data)
        setUser({
            userInfo:{
                ...data
            }
        })
      
    }

    console.log('fun render()');
    return(
        <>        
        <h1>  Profile</h1><br/>
        Name : {user.userInfo.name}<br>
        </br>
        Location : {user.userInfo.location}<br/>
        image: <img src={user.userInfo.avatar_url} alt='user'/>

        </>

    );
}

export default ProfileFunction;