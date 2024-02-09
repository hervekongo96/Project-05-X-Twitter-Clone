import React, { createContext, useState, useEffect } from 'react';
import { getTweets } from './Api/apiRequest';

export const TweetContext = createContext();

export const TweetProvider = ({children}) => {

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
      {children}
    </TweetContext.Provider>
  );
};
