import { useParams } from 'react-router-dom'
import data from '../Data/data'
import Sidebar from '../components/Sidebar/Sidebar'
import TrendsProfil from '../components/Profil/TrendsProfil'
import ProfilImage from '../images/profile-photo.png'



export default function UserPage() {
  

  const useParam = useParams()
  const {id} = useParam
  const post = data.find((post) => post.id == id)
  return (
    <>
        <Sidebar />
        <   div className='timeline'>
                <div className="header">
                    <h1>User</h1>
                </div>
                <div className="image-background-profil">
                    <img src={ProfilImage} alt="" />
                </div>
                <div className='tweet' key={post.id}>
                    <div className="tweet-avatar">
                        <img src={post.avatarTweet} alt="" />
                    </div>
                    <div className="tweet-content">
                        <div className="tweet-body">
                            <div className="tweet-title">
                                <span className='tweet-title-author'>{post.titleTweet}</span>
                                <span><img src={post.certificat} alt="certificated" /></span>
                                <span className='tweet-title-details'>{post.detailsTitleTweet}</span>
                                <span className='tweet-title-details'>{post.time}</span>
                            </div>
                            <div className="tweet-text">
                                {post.textTweet}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <TrendsProfil />
    </>
  )
}