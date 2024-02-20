import PageTitle from "./PageTitle"
import TopTweets from "./TopTweets"
<<<<<<< HEAD
import UserContext from "../../UserContext"
=======
import {UserContext} from "../../UserContext"
>>>>>>> Dev-v4
import { useContext } from "react"

export default function Header() {

  const user = useContext(UserContext)
<<<<<<< HEAD
=======

>>>>>>> Dev-v4
  return (
    <div className="header">
        <PageTitle texte={user.name} />
        <TopTweets />
    </div>
  )
}
