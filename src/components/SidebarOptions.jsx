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
import Navigation from "./Navigation"

export default function SidebarOptions() {
  return (
    <nav>
        <ul className="sidebarOptions">        
            <li className="lienk-navigation">
                <Navigation texte={"Home"} src={Home} url={"/"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Explore"} src={Explore} url={"/explore"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Notifications"} src={Notifications} url={"/notifications"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Messages"} src={Messages} url={"/booksmarks"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Bookmarks"} src={Bookmarks} url={"/bookmarks"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Lists"} src={Lists} url={"/lists"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Profile"} src={Profile} url={"/profil"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"More"} src={More} url={"/more"} />
            </li>
            
            <Button value={"Tweet"} className={"button btn"} />
            
        </ul>
    </nav>
  )
}

