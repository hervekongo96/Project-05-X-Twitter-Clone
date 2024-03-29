import React from 'react'
import { useState } from 'react';

const reply ="M11.705 1.86835L8.24834 1.86002H8.24667C4.60167 1.86002 1.74667 4.71585 1.74667 8.36168C1.74667 11.7767 4.40167 14.3667 7.96751 14.5033V17.6933C7.96751 17.7833 8.00417 17.9317 8.06751 18.0292C8.18584 18.2167 8.38751 18.3183 8.59417 18.3183C8.70917 18.3183 8.82501 18.2867 8.92917 18.22C9.14917 18.08 14.3233 14.77 15.6692 13.6317C17.2542 12.29 18.2025 10.3233 18.205 8.37168V8.35752C18.2 4.71835 15.3467 1.86835 11.705 1.86752V1.86835ZM14.8608 12.6783C13.9158 13.4783 10.8092 15.5159 9.21751 16.5475V13.8917C9.21751 13.5467 8.93834 13.2667 8.59251 13.2667H8.26251C5.21251 13.2667 2.99751 11.2034 2.99751 8.36168C2.99751 5.41668 5.30417 3.11002 8.24751 3.11002L11.7033 3.11835H11.705C14.6483 3.11835 16.955 5.42335 16.9567 8.36502C16.9542 9.95668 16.1717 11.5683 14.8617 12.6783H14.8608Z"

export default function IconComent({className,counts}) {
  const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
      setIsHovered(true);
  
    };
    const divStyles = {
      color: isHovered ? '#1d9bf0' : ' ',
      padding: '.625rem',
    };

  

  return (
    <div className={className} onClick={()=>handleMouseEnter()} style={divStyles} title='commente'>
      <span className="tweet-action-button-over">
          <svg width="18" height="17" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d={reply} fill={`${isHovered ? '#1d9bf0' : '#6E767D'}`}/>
          </svg>
      </span>   
      <span className="tweet-title-details details-count-icon-coment"  style={divStyles}>{counts}</span>
    </div>
  )
}