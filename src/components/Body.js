import RestroCard  from "./RestroCard";
import {restObj} from '../utils/mockData'
import {useState} from 'react';


const Body =() =>{

    const [resturants, setResturants] =useState(restObj);

    const filterRatings=()=>{
        console.log('inside filter ratings');
        const filteredResturants=resturants.filter(rest=>rest.data.avgRating>4);
        setResturants(filteredResturants);
    }

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filterRestro">
            <button className="restro-btn"
            onClick={filterRatings} >Filter resturant by above 4+ ratings </button>    

<button className="restro-clear-btn"
            onClick={()=>setResturants(restObj)} >Clear filter</button>   
            </div>

            <div className="rest-container">
                {resturants.map(restDaata=>
              <RestroCard key={restDaata.data.id} restData={restDaata}
              />
)};
            </div>
        </div>
    )
}


export default Body;