import { createContext } from "react";


const UserContext=createContext({
    user:{
        name:' dummy name ',
        email: 'dummy email id'
    }
})


export default UserContext;