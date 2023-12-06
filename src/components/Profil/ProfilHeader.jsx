import PageTitle from "../PageTitle"
import ProfilImage from "../../images/profile-photo.png"


function Info() {
  return (
    <div className="timeline">
        <div className="header">
            <PageTitle texte={"Profil"} />
        </div>
        <div className="image-background-profil">
          <img src={ProfilImage} alt="" />
        </div>
        <div className="profil-news">
          <button className="profil-button">Edit profile</button>
          <div className="profil-hedear-title">
            <h3>Bradly Ortiz</h3>
            <span className="tweet-title-details">@badly</span>
          </div>
          <p className="tweet-title-details">Jained November 2023</p>
          <div className="profil-follow">
            <span className="tweet-title-details">13 Following</span>
            <span className="tweet-title-details">130 Follower</span>
          </div>
          <div className="sub-menu">
              <span className="tweet-title-details">Posts</span>
              <span className="tweet-title-details">Replies</span>
              <span className="tweet-title-details">Highlights</span>
              <span className="tweet-title-details">Media</span>
              <span className="tweet-title-details">Likes</span>
          </div>
        </div>
    </div>
  )
}

export default Info