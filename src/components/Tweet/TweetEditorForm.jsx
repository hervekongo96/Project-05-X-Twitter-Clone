import TweetEditorButtons from "./TweetEditorButtons"
import { useContext, useState } from "react"
import { TweetContext } from "../../TweetContext"


const TweetEditorForm = () => {

  const { tweetData, setTweetData } = useContext(TweetContext);
  const [tweetText, setTweetText] = useState('');
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTweetData([...tweetData, { id: tweetData.length + 1, text: tweetText }]); // Ajouter un nouvel objet au tableau de données existant
    setTweetText(''); // Réinitialiser la valeur de l'entrée
  };

  const handleInputChange = (event) => {
    setTweetText(event.target.value);
  };

  return (
    <div className="tweet-editor-form">
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          placeholder="What's happening ?" 
          className="tweet-editor-input"
          value={tweetText}
          onChange={handleInputChange}
        />
        <TweetEditorButtons />
      </form>
    </div>
  )
}

export default TweetEditorForm