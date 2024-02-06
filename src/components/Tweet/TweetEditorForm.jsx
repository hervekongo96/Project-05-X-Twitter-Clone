import TweetEditorButtons from "./TweetEditorButtons"
import { useContext, useState } from "react"
import { TweetContext } from "../../TweetContext"
import UserContext from "../../UserContext"
import axios from "axios"

const TweetEditorForm = () => {

  const { tweetData, setTweetData } = useContext(TweetContext);
  const [tweetText, setTweetText] = useState('');
  const heure = new Date()
  const userCurrent = useContext(UserContext)

  const newTweet = {
    id: tweetData.length + 1,
    avatarTweet: `${userCurrent.profil}`,
    auteur: `${userCurrent.name}`,
    certificat: true,
    detailsTitleTweet: `${userCurrent.subname}`,
    time: `${heure.getMinutes()} sec`,
    textTweet: tweetText,
    imageTweet: "",
    message: 0,
    share: 0,
    like: 0,
    upload: 0
  };    
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (tweetText.trim() === '') return
     // Ajouter un nouvel objet au tableau de données existant 
    setTweetData([newTweet, ...tweetData]); 
     // Réinitialiser la valeur de l'entrée 
    setTweetText(''); 
      axios.post(`http://localhost:8000/tweet`, newTweet )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
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


// import TweetEditorButtons from "./TweetEditorButtons"
// import { useContext, useState } from "react"
// import UserContext from "../../UserContext"
// import axios from "axios"
// import { useForm } from "react-hook-form"
// import ErrorMessage from '../errorMessage'



// const TweetEditorForm = () => {

//   const {register, handleSubmit, formState:{errors}} = useForm()

//   function postTweet(url, data){
//     axios.post(url,data).then(response => console.log(response)).catch(error => console.log(error.message))
//   }

  
//   const heure = new Date()
//   const userCurrent = useContext(UserContext)
  
//   return (
//     <div className="tweet-editor-form">
//       <form onSubmit={handleSubmit((data, event) => {
//         postTweet('http://localhost:8000/tweet', data)
//         event.target.reset()
//       })}
//       >
//         <input type="hidden" value={userCurrent.profil} {...register("avatarTweet")}/>
//         <input type="hidden" value={userCurrent.name} {...register("auteur")}/>
//         <input type="hidden" value={true} {...register("certificat")}/>
//         <input type="hidden" value={userCurrent.subname} {...register("detailsTitleTweet")}/>
//         <input type="hidden" value={heure.getMinutes()} {...register("time")}/>
//         <input autoComplete="off"
//           className="tweet-editor-input"
//           type="text" {...register("tweetText", {
//             required: "Ce champ est obligatoire",
//             minLength: {value: 5, message: "votre tweet post doit avoir au moins 5 caracteres"},
//             maxLength: {value: 300, message: "Votre tweet post doit avoir moins de 300 caracteres"}
//           })} placeholder="What's happening ?"
//         />
//         <input type="hidden" value={" "} {...register("imageTweet")}/>
//         <input type="hidden" value={"0"} {...register("message")}/>
//         <input type="hidden" value={"0"} {...register("share")}/>
//         <input type="hidden" value={0} {...register("like")}/>
//         <input type="hidden" value={"0"} {...register("upload")}/>
//         <ErrorMessage message={errors.tweetText?.message} />
//         <TweetEditorButtons />
//       </form>
//     </div>
//   )
// }

// export default TweetEditorForm