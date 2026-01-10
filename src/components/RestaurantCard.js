import { CDN_URL } from "../utils/constants";

const stylecard = {
  backgroundColor:"#f0f0f0",
}
const RestaurantCard = (props) => {
  const {restaurantData}=props;
  console.log(restaurantData.card.card.info.name);
  return (
    <div className="restaurant-card" style={stylecard}>
        <img className="restaurant-img" 
        src={
        CDN_URL+ 
        restaurantData.card.card.info.cloudinaryImageId}></img>
      <h3>{restaurantData.card.card.info.name}</h3>
      <h4>{restaurantData.card.card.info.cuisines.join(",")}</h4>
      <h4>{restaurantData.card.card.info.avgRating} stars</h4>
      <h4>{restaurantData.card.card.info.costForTwo}</h4>
    </div>
  )
}

export default RestaurantCard;