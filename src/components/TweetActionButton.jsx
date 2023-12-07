import { useState } from "react";


export default function TweetActionButton({url, url2, className1}) {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false)

    function handleClick() {
        setCount(count + 1);
    }
    const handleMouseEnter = () => {
      setIsHovered(true);
  
    };
    const divStyles = {
      color: isHovered ? 'red' : ' ',
      padding: '10px',
    };

  

  return (
    <div className={className1} onClick={()=>{handleClick(), handleMouseEnter()}} style={divStyles} >
      <span className="tweet-action-button-over">
        <span className="tweet-action-button-over-2">
          <svg width="18" height="17" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d={url} fill={`${isHovered ? 'red' : '#6E767D'}`}/>
            <path d={url2} fill={`${isHovered ? 'red' : '#6E767D'}`}/>
          </svg>
        </span>
      </span>
      <span className="tweet-title-details details-count"  style={divStyles}>{count}</span>
    </div>
  )
}
