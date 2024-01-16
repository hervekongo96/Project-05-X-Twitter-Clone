import React from 'react'
import data from "../../Data/initial-data.json"
import { useContext } from 'react'
import UserContext from '../../UserContext'




function PostFilter() {

 const user = useContext(UserContext)
  //  const posts = data.tweet
  //  const user = data.tweet.auteur
   
  //  const tweetsByAuthor = posts.filter(tweets => tweets.auteur === user);

   console.log(data.tweet.filter(tweets => tweets.auteur == user.name))

  return (
    <div>PostFilter</div>
  )
}

export default PostFilter