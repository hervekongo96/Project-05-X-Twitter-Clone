import { useContext} from "react";
import TweetEditorButtons from "./TweetEditorButtons";
import {UserContext} from "../../UserContext";
import { TweetContext } from "../../TweetContext";
import { useForm } from "react-hook-form";
import { addTweet } from "../../Api/apiRequest";

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

    const newT = {
      id: lengthTweet.length + 1,
      author: 8,
      media: [],
      retweetCount: 1,
      favoriteCount: 1,
      repliesCount: 1,
      text: data.tweetText,
      createdAt: `${ afficherDate() }`,
      handle: "@daRiddla",
      name: "Riddle Gallagher",
      profilePicture: "https://i.pravatar.cc/300?img=17",
      profileBackground: "https://picsum.photos/4128/1946.jpg"
    }

    fetch('https://twitter-clone-c1-hervekongo96.onrender.com/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newT),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Réponse du serveur :', data);
    });
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