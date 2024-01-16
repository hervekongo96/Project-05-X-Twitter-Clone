import PageTitle from "../Header/PageTitle"
import ProfilImage from "/images/profile-photo.png"
import Tweet from "../Tweet/Tweet"
import ProfilNavigation from "./ProfilNavigation"
import { useContext } from "react"
import UserContext from "../../UserContext"


function Info() {

  const user = useContext(UserContext)
  return (
    <div className="timeline">
        <div className="header">
            <PageTitle texte={"Profil"} />
        </div>
        <div className="image-background-profil">
          <img src={user.profil} alt="" />
        </div>
        <div className="profil-news">
          <button className="profil-button">Edit profile</button>
          <div className="profil-hedear-title">
            <h3>{user.name}</h3>
            <span className="tweet-title-details">{user.subname}</span>
          </div>
          <p>President Joe Biden a new agreement reached with the European union to ease Trume era tariffs on aluminum and steel as a 'major breakthough' that would service to both strengthen the US</p>
          <div className="profil-follow">
            <span><span className="tweet-title-details">13 </span><span>Following</span></span>
            <span><span className="tweet-title-details">130 </span><span>Follower</span></span>
          </div>
          <div className="sub-menu">
              <ProfilNavigation />
          </div>
        </div>
      <Tweet />  
    </div>
  )
}

export default Info