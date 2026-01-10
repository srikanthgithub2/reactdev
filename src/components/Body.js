import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        search Food here
      </div>
      <div className="restaurant-list">
         { restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.card.card.info.id} restaurantData={restaurant}/>
          ))}
      </div>
      
    </div>
  )
}

export default Body;