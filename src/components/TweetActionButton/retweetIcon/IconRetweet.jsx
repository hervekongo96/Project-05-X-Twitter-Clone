import React from 'react'
import { useState } from 'react';


const retweet ="M19.8083 13.0583C19.565 12.8142 19.1692 12.8142 18.925 13.0583L17.075 14.9083V6.37499C17.075 4.65166 15.6725 3.24999 13.95 3.24999H9.07501C8.73001 3.24999 8.45001 3.52999 8.45001 3.87499C8.45001 4.21999 8.73001 4.49999 9.07501 4.49999H13.95C14.9833 4.49999 15.825 5.34166 15.825 6.37499V14.9083L13.975 13.0583C13.7308 12.8142 13.335 12.8142 13.0917 13.0583C12.8483 13.3025 12.8467 13.6983 13.0917 13.9417L16.0083 16.8583C16.1292 16.9808 16.2892 17.0417 16.45 17.0417C16.6108 17.0417 16.7692 16.9817 16.8917 16.8583L19.8083 13.9417C20.0533 13.6983 20.0533 13.3025 19.8083 13.0583ZM10.925 15.7917H6.05001C5.01667 15.7917 4.17501 14.95 4.17501 13.9167V5.38332L6.02501 7.23332C6.14834 7.35582 6.30834 7.41666 6.46834 7.41666C6.62834 7.41666 6.78834 7.35582 6.91001 7.23332C7.15417 6.98916 7.15417 6.59332 6.91001 6.34999L3.99334 3.43332C3.74917 3.18832 3.35334 3.18832 3.11001 3.43332L0.19334 6.34999C-0.0516599 6.59332 -0.0516599 6.98916 0.19334 7.23332C0.43834 7.47749 0.832507 7.47749 1.07667 7.23332L2.92667 5.38332V13.9167C2.92667 15.64 4.32917 17.0417 6.05167 17.0417H10.9267C11.2717 17.0417 11.5517 16.7617 11.5517 16.4167C11.5517 16.0717 11.2708 15.7917 10.9267 15.7917H10.925Z"

export default function IconRetweet({className,counts}) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
      setIsHovered(true);
  
    };
    const divStyles = {
      color: isHovered ? 'green' : ' ',
      padding: '10px',
    };

  

  return (
    <div className={className} onClick={()=>handleMouseEnter()} style={divStyles} title='retweet'>
      <span className="tweet-action-button-over">
          <svg width="18" height="17" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d={retweet} fill={`${isHovered ? 'green' : '#6E767D'}`}/>
          </svg>
      </span>
      <span className="tweet-title-details details-count"  style={divStyles}>{counts}</span>
    </div>
  )
}