import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 export const Header = () => {
 const [btnNameReact,setBtnNameReact] = useState("Login");

 const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 px-1">
      <div className="logo-container">
         <Link to="/"><img className="w-20" src={LOGO_URL}></img></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </li>
          <li className="px-4">
             <Link to="/"> Home</Link></li>
          <li className="px-4">
          <Link to="/about"> About </Link>
            </li> 
          <li className="px-4">
             <Link to="/contact"> Contact</Link></li>
          <li className="px-4">Cart</li>
          <button className="login-btn" onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;
