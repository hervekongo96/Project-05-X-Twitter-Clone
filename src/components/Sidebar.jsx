import SidebarOptions from "./SidebarOptions";
import Tweeter from "../images/Twitter.svg";
import Avatar from "./Avatar";


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-image">
            <img src={Tweeter} alt=""/>
        </div>
        <div>
            <SidebarOptions />
        </div>    
        <div className="footer-sidebar">
            <Avatar />
        </div>
    </div>
  )
}
