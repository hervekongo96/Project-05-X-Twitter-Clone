<<<<<<< HEAD
import TweetEditorButtons from "./TweetEditorButtons"
import { useContext, useState } from "react"
import { TweetContext } from "../../TweetContext"
import UserContext from "../../UserContext"


const TweetEditorForm = () => {

  const { tweetData, setTweetData } = useContext(TweetContext);
  const [tweetText, setTweetText] = useState('');
  const heure = new Date()
  const userCurrent = useContext(UserContext)
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (tweetText.trim() === '') return
      setTweetData([...tweetData, { id: tweetData.length + 1,avatarTweet:`${userCurrent.profil}`,auteur:`${userCurrent.name}`,certificat: true,detailsTitleTweet:`${userCurrent.subname}`, time:`${heure.getMinutes()} sec`,  textTweet: tweetText, imageTweet:"", message:0, share:0, like:0, upload:0 }]); // Ajouter un nouvel objet au tableau de données existant
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
=======
import { useContext} from "react"
import TweetEditorButtons from "./TweetEditorButtons"
import {UserContext} from "../../UserContext"
import { TweetContext } from "../../TweetContext"
import { useForm } from "react-hook-form"
import { addTweet } from "../../Api/apiRequest"

const TweetEditorForm = () => {

  const userCurrent = useContext(UserContext);
  const lengthTweet = useContext(TweetContext)


  const { register, handleSubmit, formState : {errors} } = useForm()

  function afficherDate() {
    let date = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateString = date.toLocaleDateString('fr-FR', options);
    return dateString
  }
  

  const onFormSubmit = (data, event) => {
    // create a new tweet object
    const newTweet = {
      id: lengthTweet.length + 1,
      avatarTweet: `${userCurrent.profil}`,
      auteur: `${userCurrent.name}`,
      certificat: true,
      detailsTitleTweet: `${userCurrent.subname}`,
      time: `${ afficherDate() }`,
      textTweet: data.tweetText,
      imageTweet: "",
      message: 0,
      share: 0,
      like: 1,
      upload: 0
    };
    addTweet(newTweet)
    event.preventDefault();
    event.target.reset()
};

  return (
    <form action="" className="tweet-editor-form" onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" autoComplete="off" className="tweet-editor-input" placeholder="What's happening?" 
        {...register("tweetText",{
          required : "Ce champ est obligatoire",
          maxLength : {value : 300, message : "La taille maxiamle de tweet vaut 300 caractères"}
        })}              
      />
      <span>{errors.tweetText?.message}</span>
      <TweetEditorButtons />
    </form>
>>>>>>> Dev-v4
  )
}

export default TweetEditorForm