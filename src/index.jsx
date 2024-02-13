import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TweetProvider } from './TweetContext';
import { UserProvider } from './UserContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <TweetProvider>
        <App />
      </TweetProvider>
    </UserProvider>
  </React.StrictMode>
);
