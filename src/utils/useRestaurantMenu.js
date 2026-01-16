import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
    const [menuData, setMenuData] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

 const fetchMenu = async() => {
    const data = await fetch(MENU_API+resrId);
    const json = await data.json();
    console.log(json);
    setMenuData(json.data);
 };


}

export default useRestaurantMenu;