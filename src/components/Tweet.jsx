import data from '../Data/data'
import TweetAction from './TweetAction'


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
                                <span>{tweet.titleTweet}</span>
                                <div className='tweet-title-details'>
                                    <span>{tweet.detailsTitleTweet}</span>
                                    <span>{tweet.time}</span>
                                </div>
                            </div>
                            <div className="tweet-text">
                                {tweet.textTweet}
                            </div>
                            <div className="tweet-image">
                                <img src={tweet.imageTweet} alt=""/>
                            </div>
                            <div className="tweet-actions">
                                <span><TweetAction url={"src/images/Reply.svg"}/> {tweet.message}</span>
                                <span><TweetAction url={"src/images/Retweet.svg"}/> {tweet.share}</span>
                                <span><TweetAction url={"src/images/React.svg"}/> {tweet.like}</span>
                                <span><TweetAction url={"src/images/Group1.svg"}/> {tweet.upload}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}
