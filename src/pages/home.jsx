import React from 'react';
import TimeLine from '../components/TimeLine';
import Sidebar from '../components/Sidebar';
import Avatar from '../components/Avatar';

function Home() {
  return (
    <>
      <Sidebar />
      <main className="timeline">
        <TimeLine />
      </main>
    </>
  );
}

export default Home;