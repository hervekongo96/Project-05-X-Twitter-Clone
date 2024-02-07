import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProvider } from './UserContext';
import UserProfile from './Data/initial-data.json';
import { TweetProvider } from './TweetContext';



const user = {
  profil  : UserProfile.currentuser.profil,
  name    : UserProfile.currentuser.name,
  subname : UserProfile.currentuser.subname,
  domain  : UserProfile.currentuser.domain
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider value={user}>
      <TweetProvider>
        <App />
      </TweetProvider>
    </UserProvider>
  </React.StrictMode>
);
