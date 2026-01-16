import RestaurantCard,{withPromotedLable} from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurants , setlistofRestaurants]=useState([]);
  const [filteredRestaurants , setfilteredRestaurants]=useState([]);
  const [searchText, setSearchText] = useState("");

const RestaurantCardPromoted= withPromotedLable(RestaurantCard);
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
          console.log(filteredRestaurants);


  return listofRestaurants.length === 0 ?
  ( <Shimmer/> ) : (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
        <input
          type="text"
          className="border border-solid to-black" name="searchText" value={searchText} onChange={(e) => { 
            setSearchText(e.target.value)
          }}></input>
          <button className="px-4 py-1 bg-amber-200 m-4 rounded-lg cursor-pointer" onClick={()=>{ 
            const filrersdata= listofRestaurants.filter(
              (res) => res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filrersdata);
          }}>Search</button>
            </div>
             <div className="p-4 m-4">
        <button
          className="px-4 py-1 bg-amber-200 m-4 rounded-lg cursor-pointer"
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
      </div>


      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/"+restaurant.id} className="cursor-pointer">
            {
              restaurant.promoted ? (<RestaurantCardPromoted restaurantData={restaurant} />) :
               (<RestaurantCard restaurantData={restaurant}/>) 

            } 
           
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
