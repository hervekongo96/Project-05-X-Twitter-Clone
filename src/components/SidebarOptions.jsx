import { NavLink } from "react-router-dom"
import Home from "../images/Home-Fill.svg"
import Explore from "../images/Explore.svg"
import Notifications from "../images/Notifications.svg"
import Messages from "../images/Messages.svg"
import Bookmarks from "../images/Bookmarks.svg"
import Lists from "../images/Lists.svg"
import Profile from "../images/Profile.svg"
import More from "../images/More.svg"
import Button from "./Button"

export default function SidebarOptions() {
  return (
    <ul className="sidebarOptions">        
        <li>
            <img src={Home} alt="home" /><a to="/home">Home</a>
        </li>
        <li>
            <img src={Explore} alt="explore" /><a to="/explore">Explore</a>
        </li>
        <li>
            <img src={Notifications} alt="notification" /><a to="/notification">Notifications</a>
        </li>
        <li>
            <img src={Messages} alt="message" /><a to="/messages">Messages</a>
        </li>
        <li>
            <img src={Bookmarks} alt="bookmark" /><a to="/bookmarks">Bookmarks</a>
        </li>
        <li>
            <img src={Lists} alt="Lists" /><a to="/lists">Lists</a>
        </li>
        <li>
            <img src={Profile} alt="Profile" /><a to="/profile">Profile</a>
        </li>
        <li>
            <img src={More} alt="More" /><a to="/more">More</a>
        </li>
        
        <Button value={"Tweet"} className={"button btn"} />
        
    </ul>
  )
}

