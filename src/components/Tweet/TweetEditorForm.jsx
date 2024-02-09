import { useContext} from "react"
import TweetEditorButtons from "./TweetEditorButtons"
import UserContext from "../../UserContext"
import { useForm } from "react-hook-form"
import { addTweet } from "../../Api/apiRequest"

const TweetEditorForm = () => {

  const userCurrent = useContext(UserContext)

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
  )
}

export default TweetEditorForm