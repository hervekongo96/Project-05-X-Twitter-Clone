import PageTitle from "../Header/PageTitle";
import ProfilNavigation from "./ProfilNavigation";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import BackButton from "../backButton";
import { TweetContext } from "../../TweetContext";
import IconComent from "../TweetActionButton/comentIcon/IconComent";
import IconLike from "../TweetActionButton/like/IconLike";
import IconRetweet from "../TweetActionButton/retweetIcon/IconRetweet";
import IconUpload from "../TweetActionButton/uploadIcon/IconUpload";
import moment from 'moment/moment';

function Info() {

  const  tweetData  = useContext(TweetContext);
  const user = useContext(UserContext);
  const filtrer = tweetData.filter(filtre => filtre.name === user.name)
  
  return (
    <div className="timeline">
        <div className="header">
          <span className='back-header'>
            <span className="back-button">
              <Link to={'/'}><BackButton /></Link>
            </span>
              <h1>
                <PageTitle texte={user.name} />
              </h1>
          </span>
        </div>
        <div className="image-background-profil image-background-profil-user" style={{backgroundImage: `url(${user.profileBackground})`}}>
                <img src={user.profilePicture} alt="avatar" />
            </div>
        <div className="profil-news">
          <button className="profil-button">Edit profile</button>
          <div className="profil-hedear-title">
            <h3>{user.name}</h3>
            <span className="tweet-title-details">{user.subname}</span>
          </div>
          <p>{user.bio}</p>
          <div className="profil-follow">
            <span><span className="tweet-title-details">13 </span><span>Following</span></span>
            <span><span className="tweet-title-details">130 </span><span>Follower</span></span>
          </div>
          <div className="sub-menu">
              <ProfilNavigation />
          </div>
        </div>
        {
          filtrer.map(posts => (
            <div className="tweet">
              <div className="tweet-avatar">
                <img src={posts.profilePicture} alt="" />
              </div>
              <div className="profil-hedear-title">
                <div className="tweet-content">
                  <div className="tweet-body">
                    <div className="tweet-title">
                      <span className='tweet-title-author'>{posts.name}</span>
                        {posts.handle ? (<span><img src="/images/Vector.svg" alt="certificated" /></span>):(<span>-</span>)}
                        <span className='tweet-title-details'>{posts.handle}</span>
                        <span className='tweet-title-details'>{moment(posts.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    </div>
                    <div className="tweet-text">
                      {posts.text}
                    </div>
                    {
                      posts.media.length > 0 ? <img key={posts.id} src={posts.media[0]} alt={`Image ${posts.id}`} className='max-w-full h-60 object-cover rounded-3xl border-2 border-gray-700'/> : posts.media
                    }
                  </div>
                  <div className="tweet-actions">
                    <IconComent counts={posts.favoriteCount} className={'tweet-action-button-reply'}/>
                    <IconRetweet counts={posts.retweetCount} className={'tweet-action-button-retweet'}/>
                    <IconLike tweetId={posts.id} initialCount ={posts.repliesCount} className={'tweet-action-button-react'} />
                    <IconUpload counts={posts.upload} className={'tweet-action-button-group'}/>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Info