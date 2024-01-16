import { useState } from "react"
import dataTweet from '../../Data/initial-data.json'
import TweetEditorButtons from "./TweetEditorButtons"



export default function TweetEditorForm() {
  const tweet = dataTweet.tweet
  const [textTweet, setTextTweet] = useState("");
  const [dataList, setDataList] = useState(tweet);

  const handleInputChange = (e) => {
    setTextTweet(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPost = {
      id: Date.now(),
      avatarTweet :"",
      auteur :"Bradly Ortiz",
      certificat : true,
      detailsTitleTweet :"@bradly ",
      time :"10s",
      textTweet :textTweet,
      imageTweet :"",
      message :"",
      share :"",
      like : "",
      upload :"" 
    }
    setDataList([...dataList, newPost]);
    setTextTweet('')
    tweet.push(newPost)
    console.log(dataList);
  }
  return (
    <div className="tweet-editor-form">
        <form  onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="What's happening ?" 
                className="tweet-editor-input"
                value={textTweet}
                onChange={handleInputChange} 
            />
            <TweetEditorButtons />
        </form>
    </div>
  )
}
