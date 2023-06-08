import { useRouteError } from "react-router-dom";

const Error=()=>{
    const error= useRouteError();
    console.log(error);
    return (
        <>
        <h1>Error page</h1>
        Status : {error.status} <br></br>
        Message : {error.data}

        </>
        
    )
}

export default Error;