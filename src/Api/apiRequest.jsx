import axios from 'axios';

// getting Current user 
const getCurrentUser = async () => {
    try {
        const response = await axios.get('https://twitter-clone-c1-hervekongo96.onrender.com/tweets');
        let data = response.data;
        return data; 
    } catch (errors) {
        console.error('Une erreur lors de la récupération', errors);
    }       
}

// routes for the tweets

//1. add tweet in api
const addTweet = (data) => {
    axios.post("http://127.0.0.1:3001/tweet", data)
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
        const response = await axios.get('https://twitter-clone-c1-hervekongo96.onrender.com/tweets');
        let data = response.data.tweets;
        let dataReverse = data.reverse();
        return dataReverse; 
    } catch (errors) {
        console.error('Une erreur lors de la récupération', errors);
    }
      
}

export { addTweet, getTweets, getCurrentUser }