import React from 'react';
import TimeLine from '../components/TimeLine/TimeLine';
import Trends from '../components/Trends/Trends';
import Sidebar from '../components/Sidebar/Sidebar';
import { UserProvider } from '../UserContext';
import UserProfile from '../Data/initial-data.json';

const user = {
  profil  : UserProfile.currentuser.profil,
  name    : UserProfile.currentuser.name,
  subname : UserProfile.currentuser.subname
};


function Home() {
  return (
    <UserProvider value={user}>
      <Sidebar />
      <main className="timeline">
        <TimeLine />
      </main>
      <Trends />
    </UserProvider>
  );
}

export default Home;