import React, { useEffect, useState } from "react";

const useResturant=(id)=>{
    const [restMenu,setRestMenu]=useState({});
    useEffect(()=>{
        fetchResturantMenu();
    },[])
    const fetchResturantMenu =async()=>{
        const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId='+id+'&submitAction=ENTER')
        const json= await data.json();
        setRestMenu(json);
    }
  return restMenu;
}

export default useResturant;