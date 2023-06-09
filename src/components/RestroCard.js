
import { useContext } from 'react';
import {RESTRO_CARD_CDN_URL} from '../utils/constant'
import UserContext from '../utils/UserContext';

const RestroCard=(props)=>{

    const {user} =useContext(UserContext);

    const {restData}=props;
    const {name,cuisines,costForTwoString,cloudinaryImageId,avgRating,deliveryTime}=restData.data;
    return (
        <div className="w-60 p-2 m-2 shadow-lg bg-pink-50">
            <img
             className="rest-logo" 
             alt="rest-logo"
             src={RESTRO_CARD_CDN_URL +cloudinaryImageId}
             />
            <h3 className='font-bold'>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h5>{costForTwoString}</h5>
            <h5>{avgRating}</h5>
            <h5>{deliveryTime} minutes</h5>
            <span className='text-black'>{user.name}</span>
            <span className='text-blue-400'>{user.email}</span>
        </div>
    )
}

export default RestroCard;