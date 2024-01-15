import TweetEditorButtons from "./TweetEditorButtons"


export default function TweetEditorForm() {
  return (
    <div className="tweet-editor-form" id="tweetEditor">
        <form >
            <input 
                type="text" 
                placeholder="What's happening ?" 
                className="tweet-editor-input" 
            />
            <TweetEditorButtons />
        </form>
    </div>
  )
}
