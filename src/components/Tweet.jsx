import data from '../Data/data'
import TweetActionButton from './TweetActionButton'



export default function Tweet() {
  return (
    <>
        {
            data.map(tweet =>(
                <div className='tweet' key={tweet.id}>
                    <div className="tweet-avatar">
                        <img src={tweet.avatarTweet} alt="" />
                    </div>
                    <div className="tweet-content">
                        <div className="tweet-body">
                            <div className="tweet-title">
                                <span className='tweet-title-author'>{tweet.titleTweet}</span>
                                <span><img src={tweet.certificat} alt="certificated" /></span>
                                <span className='tweet-title-details'>{tweet.detailsTitleTweet}</span>
                                <span className='tweet-title-details'>{tweet.time}</span>
                            </div>
                            <div className="tweet-text">
                                {tweet.textTweet}
                            </div>
                            {tweet.imageTweet && <span className='tweet-image'><img src={tweet.imageTweet} alt=""/></span>}
                        </div>
                        <div className="tweet-actions">
                            <span className='tweet-action'><TweetActionButton url={"src/images/Reply.svg"}/>{tweet.message}</span>
                            <span className='tweet-action'><TweetActionButton url={"src/images/Retweet.svg"}/>{tweet.share}</span>
                            <span className='tweet-action'><TweetActionButton url={"src/images/React.svg"}/>{tweet.like}</span>
                            <span className='tweet-action'><TweetActionButton url={"src/images/Group1.svg"}/>{tweet.upload}</span>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}
