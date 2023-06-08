import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTRO_CARD_CDN_URL } from "../utils/constant";
import useResturant from "../utils/useResturant";

const ResturantMenu =()=>{
    const params=useParams();
    const {id} =params;


    const restMenu=useResturant(id);

    console.log(params);

    return (
        <>
        <h1>Resturant Id : {id}</h1>
       <h2>Rest name:  {restMenu?.data?.cards[0]?.card?.card?.info?.name}</h2> 
       <div className="rest-card">
       <img
             className="rest-logo" 
             alt="rest-logo"
             src={RESTRO_CARD_CDN_URL +restMenu?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}
             />
             </div>
           
       </>
    )
}

export default ResturantMenu;