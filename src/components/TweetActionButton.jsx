import { useState } from "react";


export default function TweetActionButton({url}) {
  const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
  return (
    <>
      <img src={url} alt=""  onClick={handleClick} />
      <span>{count}</span>
    </>
  )
}
