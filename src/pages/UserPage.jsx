import { Link, useParams} from 'react-router-dom';
import { useContext } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TrendsProfil from '../components/Profil/TrendsProfil';
import BackButton from '../components/backButton';
import ProfilNavigation from '../components/Profil/ProfilNavigation';
import IconComent from '../components/TweetActionButton/comentIcon/IconComent';
import IconLike from '../components/TweetActionButton/like/IconLike';
import IconRetweet from '../components/TweetActionButton/retweetIcon/IconRetweet';
import IconUpload from '../components/TweetActionButton/uploadIcon/IconUpload';
import { TweetContext } from '../TweetContext';
import moment from 'moment/moment';



export default function UserPage() {

const {name} = useParams();
const tweetData = useContext(TweetContext);

const post = tweetData.find((post) => post.name === name);

const tweet = tweetData.filter(filtre => filtre.name == post.name);

  return (
    <>
        <Sidebar />
        <div className='timeline' key={post.id}>
            <div className="header">
                <span className='back-header'>
                    <span className="back-button">
                        <Link to={'/'}><BackButton /></Link>
                    </span>
                    <h1>{post.name}</h1>
                </span>
            </div>
            <div className="image-background-profil image-background-profil-user" style={{backgroundImage: `url(${post.profileBackground})`}}>
                <img src={post.profilePicture} alt="avatar" />
            </div>
            <div className="profil-news">
                <button className="profil-button">Edit profile</button>
                <div className="profil-hedear-title">
                    <div className="profil-headear-title-space">
                        <h3>{post.name}</h3>
                        <span>{post.handle ? (<span><img src="/images/Vector.svg" alt="certificated" /></span>):(<span>-</span>)}</span>
                    </div>
                    <span className="tweet-title-details">{post.handle}</span>
                </div>
                <p className='profil-hedear-description'>President Joe Biden a new agreement reached with the European union to ease Trume era tariffs on aluminum and steel as a 'major breakthough' that would service to both strengthen the US</p>
                <div className="profil-follow">
                    <span><span className="tweet-title-details">13 </span><span>Following</span></span>
                    <span><span className="tweet-title-details">130 </span><span>Follower</span></span>
                </div>
                <div className="sub-menu">
                    <ProfilNavigation />
                </div>
            </div>
            {
                tweet.map(posts => (
                    <div className="tweet" key={posts.id}>
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
        <TrendsProfil />
    </>
  )
}