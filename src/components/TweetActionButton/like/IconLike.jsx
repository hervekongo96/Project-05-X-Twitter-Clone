import React, { useState, useEffect } from 'react';

const reacts = "/images/React.svg";
const liked = "/images/Liked.svg";

export default function IconLike({ tweetId, initialCount}) {
  const [icon, setIcon] = useState(localStorage.getItem(`like_${tweetId}`) === "true" || false);
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    localStorage.setItem(`like_${tweetId}`, icon);
  }, [icon, tweetId]);

  const changeIcon = () => {
    setIcon(!icon);
  };

  const handleClick = () => {
    if (!icon) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="tweet-action-button-react" title="like" onClick={() => { changeIcon(); handleClick(); }}>
      <span className="tweet-action-button-over">
        <img src={icon ? reacts : liked} alt="like" />
      </span>
      <span style={{ color: !icon ? 'red' : ' ', padding: '10px' }}>{count}</span>
    </div>
  );
}





