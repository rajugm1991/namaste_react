
import {RESTRO_CARD_CDN_URL} from '../utils/constant'

const RestroCard=(props)=>{
    const {restData}=props;
    const {name,cuisines,costForTwoString,cloudinaryImageId,avgRating,deliveryTime}=restData.data;
    return (
        <div className="rest-card">
            <img
             className="rest-logo" 
             alt="rest-logo"
             src={RESTRO_CARD_CDN_URL +cloudinaryImageId}
             />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h5>{costForTwoString}</h5>
            <h5>{avgRating}</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

export default RestroCard;