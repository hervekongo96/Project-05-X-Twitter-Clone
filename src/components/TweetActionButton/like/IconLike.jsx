import { useState } from "react"


const reacts = "/images/React.svg"
const liked = "/images/Liked.svg"



export default function IconLike({counts}) {

const [icon, setIcon] = useState(true)
const [count, setCount] = useState(counts)



const changeIcon =() =>{
    setIcon(!icon)
}

const handleClick = () =>{
    if(!icon){
        setCount(count -1)
    }else{
        setCount(count +1)
    }
}

const divStyles = {
    color: !icon ? 'red' : ' ',
    padding: '10px',
}

  return (
    <div className="tweet-action-button-react" title="like">
        <span className="tweet-action-button-over">
            <img onClick={()=>{changeIcon(), handleClick()}} src={`${icon ? reacts : liked}`} />
        </span>
        <span style={divStyles}>{count}</span>
    </div>
  )
}



