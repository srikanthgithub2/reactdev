import {useState,useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { useParams} from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
 
const {resrId}= useParams();

const menuData = useRestaurantMenu(resrId);

 if( menuData === null ) {
    return <Shimmer/>;
 }

 const {name,cuisines} = menuData.data;

  return (
  <div className="menu">
    <h1>{name}</h1>
    <h2>Restaurant Menu</h2>
    
        <div>
        <ul>
            <li>Biryani</li>
            <li>Starters</li>
            <li>Rice</li>
            <li>Curries</li>
            <li>Snacks</li>
            <li> desserts</li>
        </ul>

        </div>
    </div>
);
};
export default RestaurantMenu;