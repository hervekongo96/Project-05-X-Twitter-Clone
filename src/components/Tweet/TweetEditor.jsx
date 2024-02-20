import { useContext } from "react";
import Avatar from "../TimeLine/Avatar"
import TweetEditorForm from "./TweetEditorForm";
<<<<<<< HEAD
import UserContext from "../../UserContext";
=======
import {UserContext} from "../../UserContext";
>>>>>>> Dev-v4

export default function TweetEditor() {

  const user = useContext(UserContext);

  return (
    <div className="tweet-editor">
        <Avatar src={user.profil} url={"/profil"} />
        <TweetEditorForm />
    </div>
  )
}
