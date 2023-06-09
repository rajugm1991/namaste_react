import React, { lazy,Suspense, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import ProfileFunction from "./components/ProfileFunction";
import UserContext from "./utils/UserContext";


const Instamart=lazy(()=>import('./components/Instamart'))


const AppLayout =()=>{

  const [user,setUser]=useState({
    name: 'raju gm',
    email: 'raju@gmail.com'
  })

    return (
        <div className="app">
          <>
           <UserContext.Provider value={{
            user:user,
            setUser:setUser
           }}>
            <Header/>
            <Outlet/>
            </UserContext.Provider>
            </>
        </div>
    )
}

const Approuter = createBrowserRouter([
{
  path :'/',
  element: <AppLayout/>,
  errorElement: <Error/>,
  children:[

          {
            path :'/',
            element: <Body/>,

          },
          {
            path : '/aboutUs',
            element : <About/>,
            children :[
              {
                path :'profile',
                element: <ProfileFunction/>
              }
            ]
          
          },{
            path : '/contactUs',
            element : <Contact/>
          },{
            path : '/resturantMenu/:id',
            element : <ResturantMenu/>
          },
          {
            path:'/instamart',
            element:
            <Suspense fallback={<h1>Loading......</h1>}><Instamart/></Suspense>
          }

  ]
}

])

const root=ReactDOM.createRoot(document.getElementById("react"));
root.render(<RouterProvider  router={Approuter}/>);