import axios from 'axios';

// getting Current user 
const getCurrentUser = async () => {
    return await axios.get(`http://127.0.0.1:3000/currentuser`)
    .then(response => {
        return response.data;
    })
    .catch(errors => {
        console.error(errors);
    })        
}

// routes for the tweets

//1. add tweet in api
const addTweet = (data) => {
    axios.post("http://127.0.0.1:3000/tweet", data)
    .then(res => {
        console.log(`${res.status} Tweet bien enregistré!`);
    })
    .catch(error => {
        console.log(error);
    })
}

//2. to get all tweets in api
const getTweets = async () => {
    try {
        const res = await axios.get('http://127.0.0.1:3000/tweet');
        return res.data; 
    } catch (errors) {
        console.error('Une erreur lors de la récupération', errors);
    }
 }

export { addTweet, getTweets, getCurrentUser }