import { useContext, useState } from "react"
import TweetEditorButtons from "./TweetEditorButtons"
import tweetData from '../../../public/initial-data.json'
// import { TweetContext } from "../../TweetContext"
import UserContext from "../../UserContext"
import { useForm } from "react-hook-form"
import { addTweet } from "../../Api/apiRequest"

const TweetEditorForm = () => {

  // const { tweetData, setTweetData } = useContext(TweetContext);
  // const [tweetText, setTweetText] = useState('');
  // const heure = new Date()
  const userCurrent = useContext(UserContext)

  const { register, handleSubmit, formState : {errors} } = useForm()

    
  
  // const handleFormSubmit = (event) => {
  //   if (tweetText.trim() === '') return
  //    // Ajouter un nouvel objet au tableau de données existant 
  //   setTweetData([newTweet, ...tweetData]); 
  //    // Réinitialiser la valeur de l'entrée 
  //   setTweetText(''); 
  //   event.preventDefault();
  // };

  // const handleInputChange = (event) => {
  //   setTweetText(event.target.value);
  // };

  

  function afficherDate() {
    let date = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateString = date.toLocaleDateString('fr-FR', options);
    return dateString
  }
  

  const onFormSubmit = async (data, event) => {
    // create a new tweet object
    event.preventDefault();
    event.target.reset()
    const newTweet = {
      id: tweetData.tweet.length + 1,
      avatarTweet: `${userCurrent.profil}`,
      auteur: `${userCurrent.name}`,
      certificat: true,
      detailsTitleTweet: `${userCurrent.subname}`,
      time: `${ afficherDate() }`,
      textTweet: data.tweetText,
      imageTweet: "",
      message: 0,
      share: 0,
      like: 0,
      upload: 0
    };
    await addTweet(newTweet)
};

  return (
    <form action="" className="tweet-editor-form" onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" autoComplete="off" className="tweet-editor-input" placeholder="What's happening?" 
        {...register("tweetText",{
          required : "Ce champ est obligatoire",
          maxLength : {value : 200, message : "Le tweet ne peut comprendre que 200 caractères"}
        })}              
      />
      <p>{errors.tweetText?.message}</p>
      <TweetEditorButtons />
    </form>
  )
}

export default TweetEditorForm