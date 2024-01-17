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

  return (
    <div className="tweet-action-button-react" title="like">
        <span className="tweet-action-button-over">
            <img onClick={()=>{changeIcon(), handleClick()}} src={`${icon ? reacts : liked}`} />
        </span>
        <span style={{ color: !icon ? 'red' : ' ', padding: '10px' }}>{count}</span>
    </div>
  )
}

// import { useContext } from "react"
// import { LikeContext } from "../../../LikeContext"


// const reacts = "/images/React.svg"
// const liked = "/images/Liked.svg"



// export default function IconLike() {

//     const { icon, count, changeIcon, handleClick } = useContext(LikeContext)

//   return (
//     <div className="tweet-action-button-react" title="like">
//         <span className="tweet-action-button-over">
//             <img onClick={() => { changeIcon(); handleClick(); }} src={`${icon ? reacts : liked}`} />
//         </span>
//         <span style={{ color: !icon ? 'red' : ' ', padding: '10px' }}>{count}</span>
//     </div>
//   )
// }







