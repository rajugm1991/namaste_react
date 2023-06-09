
import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Section=({title,description,isVisble,setSection})=>{
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            <button className="cursor-pointer underline" onClick={()=>setSection(isVisble)}>{isVisble ? 'Hide':'Show' }</button>
            {isVisble&&<p>{description}</p>}
        </div>
    );
}

const Instamart=()=>{

    const {user} =useContext(UserContext);

    const [section,setSection]=useState('about');

  

    return <div>
         <h1>Insta mart page -{user.name}</h1>
         <Section title={'About instamart'} isVisble={section==='about' } 
       setSection={()=>{
            setSection('about')
    }}
          description={'Taskin Ahmed, the Bangladesh pace bowler, admitted that for not being able to take part in overseas competitions. Cricbuzz had earlier reported that Taskin was denied permission to take part in County cricket for Yorkshire Cricket Club as the BCB was not ready to take any risks ahead of the World Cup.'}/>

         <Section title={'Team instamart'} isVisble={section==='team'} setSection={()=>{
 setSection('team')
         }}
         description={'Taskin Ahmed, the Bangladesh pace bowler, admitted that for not being able to take part in overseas competitions. Cricbuzz had earlier reported that Taskin was denied permission to take part in County cricket for Yorkshire Cricket Club as the BCB was not ready to take any risks ahead of the World Cup.'}/>

    </div>
}

export default Instamart;