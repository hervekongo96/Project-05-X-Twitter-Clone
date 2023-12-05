import { NavLink } from "react-router-dom"

export default function SidebarOptions() {
  return (
    <ul className="sidebarOptions">
        <li>
            <a to="/">Home</a>
        </li>
        <li>
            <a to="/">Explore</a>
        </li>
        <li>
            <a to="/">Notifications</a>
        </li>
        <li>
            <a to="/">Messages</a>
        </li>
        <li>
            <a to="/">Bookmarks</a>
        </li>
        <li>
            <a to="/">Lists</a>
        </li>
        <li>
            <a to="/">Profile</a>
        </li>
        <li>
            <a to="/">More</a>
        </li>
    </ul>
  )
}

