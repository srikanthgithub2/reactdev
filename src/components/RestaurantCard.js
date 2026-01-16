import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const {restaurantData}=props;
  return (
    <div className="m-4 px-4 w-48 h-80 rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img className="mt-4 w-39 h-40 rounded-lg" alt="restaurant-logo"
        src={
        CDN_URL+ 
        restaurantData.cloudinaryImageId}></img>
      <h3 className="font-bold text-sm py-2">{restaurantData.name}</h3>
      <h4 className="w-30">{restaurantData.cuisines.join(",")}</h4>
      <h4>{restaurantData.avgRating} stars</h4>
      <h4>{restaurantData.costForTwo}</h4>
    </div>
  )
}
 

export const withPromotedLable = (RestaurantCard) =>{
  return (props) =>{
    return (
      <div>
        <label className="bg-black absolute text-white m-2 p-2 rounded-lg"> Promoted</label>
        <RestaurantCard { ...props}/>
      </div>
    );
  }
}


export default RestaurantCard;