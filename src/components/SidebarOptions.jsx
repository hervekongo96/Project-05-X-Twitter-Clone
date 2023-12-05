import { NavLink } from "react-router-dom"
import Home from "../images/Home-Fill.svg"
import Explore from "../images/Explore.svg"
import Notifications from "../images/Notifications.svg"
import Messages from "../images/Messages.svg"
import Bookmarks from "../images/Bookmarks.svg"
import Lists from "../images/Lists.svg"
import Profile from "../images/Profile.svg"
import More from "../images/More.svg"

export default function SidebarOptions() {
  return (
    <ul className="sidebarOptions">
        <li>
            <img src={Home} alt="home" /><a to="/">Home</a>
        </li>
        <li>
            <img src={Explore} alt="explore" /><a to="/">Explore</a>
        </li>
        <li>
            <img src={Notifications} alt="notification" /><a to="/">Notifications</a>
        </li>
        <li>
            <img src={Messages} alt="message" /><a to="/">Messages</a>
        </li>
        <li>
            <img src={Bookmarks} alt="bookmark" /><a to="/">Bookmarks</a>
        </li>
        <li>
            <img src={Lists} alt="Lists" /><a to="/">Lists</a>
        </li>
        <li>
            <img src={Profile} alt="Profile" /><a to="/">Profile</a>
        </li>
        <li>
            <img src={More} alt="More" /><a to="/">More</a>
        </li>
    </ul>
  )
}

