<<<<<<< HEAD
// TweetContext.js
import React, { createContext, useState } from 'react';
import initialData from "./Data/initial-data.json"
=======
import React, { createContext, useState, useEffect } from 'react';
import { getTweets } from './Api/apiRequest';
>>>>>>> Dev-v4

export const TweetContext = createContext();

export const TweetProvider = ({children}) => {

<<<<<<< HEAD
  const initialDataTweet = initialData.tweet

  const [tweetData, setTweetData] = useState(initialDataTweet);

  return (
    <TweetContext.Provider value={{ tweetData, setTweetData }}>
=======
  const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTweets();
                setTweets(data.reverse())
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()

        const interval = setInterval(() => {
            fetchData()  
        }, 1000);

        return () => clearInterval(interval)
    }, [])

  return (
    <TweetContext.Provider value={tweets}>
>>>>>>> Dev-v4
      {children}
    </TweetContext.Provider>
  );
};
