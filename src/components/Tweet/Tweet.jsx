import { useContext } from 'react'
import { TweetContext } from '../../TweetContext'
import { Link } from 'react-router-dom'
import IconComent from '../TweetActionButton/comentIcon/IconComent'
import IconLike from '../TweetActionButton/like/IconLike'
import IconRetweet from '../TweetActionButton/retweetIcon/IconRetweet'
import IconUpload from '../TweetActionButton/uploadIcon/IconUpload'


export default function Tweet() {

    const { tweetData } = useContext(TweetContext)

  return (
    <>
        {
            tweetData.map(tweet =>(
                <div className='flex justify-start items-start gap-5 p-6 tweet' key={tweet.id}>
                    <div className="tweet-avatar">
                    <Link to={`/profils/${tweet.auteur}`}>
                        <img src={tweet.avatarTweet} alt="" />
                    </Link>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-8 w-full">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-start items-start gap-2 text-base">
                                <span className='tweet-title-author'>{tweet.auteur}</span>
                                {tweet.certificat ? (<span><img src="/images/Vector.svg" alt="certificated" /></span>):(<span>-</span>)}
                                <span className='text-gray-600'>{tweet.detailsTitleTweet}</span>
                                <span className='text-gray-600'>{tweet.time}</span>
                            </div>
                            <div className="text-gray-300 text-base">
                                {tweet.textTweet}
                            </div>
                            {tweet.imageTweet && <img src={tweet.imageTweet} alt="" className='max-w-full h-auto rounded-3xl border-2 border-gray-700'/>}
                        </div>
                        <div className="flex justify-center items-center gap-20 text-gray-500 text-base">
                            <IconComent counts={tweet.message} className={'tweet-action-button-reply'}/>
                            <IconRetweet counts={tweet.share} className={'tweet-action-button-retweet'}/>
                            <IconLike counts={tweet.like} className={'tweet-action-button-react'} />
                            <IconUpload counts={tweet.upload} className={'tweet-action-button-group'}/>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}
