import { useState, useEffect } from 'react';
import axios from 'axios';

// List of all API requests

// Users
const getAllProfiles = () => {
    
}

const getCurrentUser = async () => {
    
    return await axios.get(`http://localhost:8000/current-user`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    })        
}

// routes for the tweets

//1. add tweet in api
const addTweet = (data) => {
    axios.post("http://127.0.0.1:3000/tweet", data)
    .then(response => {
        console.log(`${response.status} Tweet bien enregistré!`);
    })
    .catch(error => {
        console.log(error);
    })
}

//2. to get all tweets in api
const getTweets = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:3000/tweet');
        return response.data; 
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des éléments', error);
    }
 }

 //3. Update All Tweets
const UpdateTweets = () => {
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


    return tweets
}

 //4. get the tweet on by on
const getTweetsByUser = async (auteur) => {
    return await axios.get(`http://127.0.0.1:3000/tweet/?auteur=${auteur}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    })
}



export { addTweet, getTweets, UpdateTweets, getAllProfiles, getCurrentUser, getTweetsByUser}