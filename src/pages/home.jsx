import React from 'react';
import TimeLine from '../components/TimeLine';
import Sidebar from '../components/Sidebar';
import Trends from '../components/Trends';

function Home() {
  return (
    <>
      <Sidebar />
      <main className="timeline">
        <TimeLine />
      </main>
      <Trends />
    </>
  );
}

export default Home;