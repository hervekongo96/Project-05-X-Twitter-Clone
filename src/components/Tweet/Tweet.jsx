import { Link } from 'react-router-dom'
import IconComent from '../TweetActionButton/comentIcon/IconComent'
import IconLike from '../TweetActionButton/like/IconLike'
import IconRetweet from '../TweetActionButton/retweetIcon/IconRetweet'
import IconUpload from '../TweetActionButton/uploadIcon/IconUpload'
import { useContext } from 'react'
import { TweetContext } from '../../TweetContext'
import moment from 'moment/moment'



export default function Tweet() {

const tweets = useContext(TweetContext);

  return (
    <>
        {
            tweets.map(tweet =>(
                <div className='flex justify-start items-start gap-5 p-6 tweet' key={tweet.id}>
                    <div className="tweet-avatar">
                    <Link to={`/profils/${tweet.name}`}>
                        <img src={tweet.profilePicture} alt="" />
                    </Link>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-8 w-full">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-start items-start gap-2 text-base">
                                <span className='tweet-title-author'>{tweet.name}</span>
                                {tweet.handle ? (<span><img src="/images/Vector.svg" alt="certificated" /></span>):(<span>-</span>)}
                                <span className='text-gray-600'>{tweet.handle}</span>
                                <span className='text-gray-600'>{moment(tweet.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                            </div>
                            <div className="text-gray-300 text-base">
                                {tweet.text}
                            </div>
                            {
                                tweet.media.length > 0 ? <img key={tweet.id} src={tweet.media[0]} alt={`Image ${tweet.id}`} className='max-w-full h-60 object-cover rounded-3xl border-2 border-gray-700'/> : tweet.media
                            }
                        </div>
                        <div className="flex justify-center items-center gap-20 text-gray-500 text-base">
                            <IconComent counts={tweet.favoriteCount} className={'tweet-action-button-reply'}/>
                            <IconRetweet counts={tweet.retweetCount} className={'tweet-action-button-retweet'}/>
                            <IconLike tweetId={tweet.id} initialCount ={tweet.repliesCount} className={'tweet-action-button-react'} />
                            <IconUpload counts={tweet.upload} className={'tweet-action-button-group'}/>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}
