import { CDN_URL } from "../utils/constants";

const stylecard = {
  backgroundColor:"#f0f0f0",
}
const RestaurantCard = (props) => {
  const {restaurantData}=props;
  return (
    <div className="restaurant-card" style={stylecard}>
        <img className="restaurant-img" 
        src={
        CDN_URL+ 
        restaurantData.cloudinaryImageId}></img>
      <h3>{restaurantData.name}</h3>
      <h4>{restaurantData.cuisines.join(",")}</h4>
      <h4>{restaurantData.avgRating} stars</h4>
      <h4>{restaurantData.costForTwo}</h4>
    </div>
  )
}

export default RestaurantCard;