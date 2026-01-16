import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 export const Header = () => {
 const [btnNameReact,setBtnNameReact] = useState("Login");

 const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
         <Link to="/"><img className="logo" src={LOGO_URL}></img></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </li>
          <li>
             <Link to="/"> Home</Link></li>
          <li>
          <Link to="/about"> About </Link>
            </li> 
          <li>
             <Link to="/contact"> Contact</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;
