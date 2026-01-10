import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import {useState} from "react";


const Body = () => {
  const [listofRestaurants , setlistofRestaurants]=useState(restaurantList);



  return (
    <div className="body">
      <div className="filter-search">
        <button className="filter-btn" onClick={() => {
         const filtersData = listofRestaurants.filter(
          (res) => res.card.card.info.avgRating > 4.1
        );
         setlistofRestaurants(filtersData);
        }}
        >
        Top Rated button</button>
      </div>
      <div className="restaurant-list">
         { listofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.card.card.info.id} restaurantData={restaurant}/>
          ))}
      </div>
      
    </div>
  )
}

export default Body;