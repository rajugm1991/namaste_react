import RestroCard  from "./RestroCard";
import {restObj} from '../utils/mockData'
import {useState,useEffect} from 'react';
import Loader from "./Loader";
import NoData from "./NoData";


const Body =() =>{

    
    const [restaurantData,setResturantData]=useState([]);
    const [filterresturants, setfilterresturants] =useState(restObj);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData= async ()=>{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.949756&lng=77.6997624&page_type=DESKTOP_WEB_LISTING');
        const json=await data.json();
        console.log(json);
        setResturantData(json.data.cards[2].data.data.cards);
        setfilterresturants(json.data.cards[2].data.data.cards);
    }

    const filterRatings=()=>{
        console.log('inside filter ratings');
        const filteredResturants=restaurantData.filter(rest=>rest.data.avgRating>4);
        setfilterresturants(filteredResturants);
    }

    return restaurantData?.length===0? <Loader/> :(
        <div className="body">
            <div className="search">
                <input 
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


            </div>
            <div className="filterRestro">
            <button className="restro-btn"
            onClick={filterRatings} >Filter resturant by above 4+ ratings </button>    

<button className="restro-clear-btn"
            onClick={()=>setfilterresturants(restaurantData)} >Clear filter</button>   
            </div>

            <div className="rest-container">
               
                {filterresturants.length===0? <NoData/>  :filterresturants.map(restDaata=>
              <RestroCard key={restDaata.data.id} restData={restDaata}
              />)};
            </div>
        </div>
    )
}


export default Body;