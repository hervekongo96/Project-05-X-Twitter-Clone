import React from 'react';
import TimeLine from '../components/TimeLine';
import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <>
      <Sidebar />
      <main className="timeline">
        <TimeLine />
      </main>
      <Sidebar />
    </>
  );
}

export default Home;