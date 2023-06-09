import RestroCard  from "./RestroCard";
import {restObj} from '../utils/mockData'
import {useState,useEffect, lazy, useContext} from 'react';
import Loader from "./Loader";
import NoData from "./NoData";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";



const Body =() =>{


    const {user,setUser}=useContext(UserContext);
    
    const [restaurantData,setResturantData]=useState([]);
    const [filterresturants, setfilterresturants] =useState(restObj);

    const isOnline=useOnline();

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData= async ()=>{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.949756&lng=77.6997624&page_type=DESKTOP_WEB_LISTING');
        const json=await data?.json();
        console.log(json);
        setResturantData(json.data.cards[2].data.data.cards);
        setfilterresturants(json.data.cards[2].data.data.cards);
    }

    const filterRatings=()=>{
        console.log('inside filter ratings');
        const filteredResturants=restaurantData.filter(rest=>rest.data.avgRating>4);
        setfilterresturants(filteredResturants);
    }
    if(!isOnline){
        return (
            <h1>oops, Not able to access! Kindly check your internet</h1>
        );
    }

    return restaurantData?.length===0? <Loader/> :(
        <div className="p-3 m-2">
            <div className="search flex py-2">
                <input 
                className="focus:bg-green-200"
                 name="search"
                 id="search"
                 type="Text"
                 placeholder="Search"
                 onChange={(e)=>{
                    const enteredFilterData=restaurantData?.filter(data=>data.data.name.includes(e.target.value));
                    console.log(enteredFilterData);
                    setfilterresturants(enteredFilterData);
                 }}
                />

           <input value={user.name} 
            type='text'
            placeholder="enter name"
            name="name"
            onChange={(e)=>setUser({
                ...user,
                name:e.target.value
            })}
            >
           </input>

           <input value={user.email} 
            type='text'
            placeholder="enter email"
            name="email"
            onChange={(e)=>setUser({
                ...user,
                email:e.target.value
            })}
            >
           </input>
           
            <div className="filterRestro  ">
            <button className="restro-btn p-3 bg-fuchsia-400 rounded-full"
            onClick={filterRatings} >Filter resturant by above 4+ ratings </button>    

      <button className="restro-btn p-3 bg-fuchsia-400 rounded-md"
            onClick={()=>setfilterresturants(restaurantData)} >Clear filter</button>   
            </div>
            </div>

            <div className="rest-container flex flex-wrap">
               
                {filterresturants.length===0? <NoData/>  :filterresturants.map(restDaata=>
               <Link key={restDaata.data.id} to={'/resturantMenu/'+restDaata.data.id}><RestroCard key={restDaata.data.id} restData={restDaata}
              /></Link>)};
            </div>
        </div>
    )
}


export default Body;