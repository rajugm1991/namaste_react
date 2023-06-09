import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClassBased";
import ProfileFunction from "./ProfileFunction";

const About =()=>{
    return (
        <>
        <h1>About us</h1>
          <h2> This is about page2</h2>
        {/* <Outlet/> */}
        <ProfileClass nameP={'rajuP'}/>
         <ProfileFunction/>
       
          </>
    )
    
}

export default About;