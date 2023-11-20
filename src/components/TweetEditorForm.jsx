import TweetEditorInput from "./TweetEditorInput"
import TweetEditorButtons from "./TweetEditorButtons"


TweetEditorInput

export default function TweetEditorForm() {
  return (
    <div className="tweet-editor-form">
        <TweetEditorInput />
        <TweetEditorButtons />
    </div>
  )
}
