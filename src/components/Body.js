import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listofRestaurants , setlistofRestaurants]=useState([]);
  const [filteredRestaurants , setfilteredRestaurants]=useState([]);
  const [searchText, setSearchText] = useState("");


useEffect(()=>{
 fetchData();
},[])

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  );
  const json= await data.json();

    const restaurantInfoList = json.data.cards
      .filter(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((card) => card.card.card.info);

    setlistofRestaurants(restaurantInfoList);
    setfilteredRestaurants(restaurantInfoList);
  };


  return listofRestaurants.length === 0 ?
  ( <Shimmer/> ) : (
    <div className="body">
      <div className="filter-search">
        <div className="search">
        <input
          type="text"
          className="search-input" name="searchText" value={searchText} onChange={(e) => { 
            setSearchText(e.target.value)
          }}></input>
          <button className="search-btn" onClick={()=>{ 
            const filrersdata= listofRestaurants.filter(
              (res) => res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filrersdata);
          }}>Search</button>
            </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtersData = listofRestaurants.filter(
              (res) => res.avgRating > 4.1
            );
            setfilteredRestaurants(filtersData);
          }}
        >
          Top Rated button
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
