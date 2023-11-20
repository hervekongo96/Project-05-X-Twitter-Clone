import TweetEditorActions from "./TweetEditorActions"
import Button from "./Button"


export default function TweetEditorButtons() {
  return (
    <div className="tweet-editor-buttons">
        <TweetEditorActions />
        <Button value={"Tweet"} className={"tweet-editor-actions"}/>
    </div>
  )
}
