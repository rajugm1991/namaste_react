import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { RESTRO_CARD_CDN_URL } from "../utils/constant";
import useResturant from "../utils/useResturant";

const ResturantMenu =()=>{
    const params=useParams();
    const {id} =params;

    const dispatch=useDispatch();

    const restMenu=useResturant(id);

    const handleItem =()=>{
        dispatch(addItem("Graphes"))
    }

    const handleRemoveItem=()=>{
        dispatch(removeItem("Graphes"));
    }

    const clearItem =()=>{
         dispatch(clearCart());
    }

    console.log(params);

    return (
        <>
        <h1>Resturant Id : {id}</h1>
       <h2>Rest name:  {restMenu?.data?.cards[0]?.card?.card?.info?.name}</h2> 
       <div className="rest-card">
 
 <div>
    <button className="p-2 m-5 bg-green-400"  onClick={()=>handleItem()}>Add Item</button> 

    <button className="p-2 m-5 bg-green-400"  onClick={()=>handleRemoveItem()}>Remove Item</button> 

    <button className="p-2 m-5 bg-green-400"  onClick={()=>clearItem()}>Clear Item</button> 

 </div>

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