import { useContext } from "react";
import Avatar from "../TimeLine/Avatar"
import More2 from "/images/More-2.svg"
//import user from "../../Data/initial-data.json"
import UserContext from "../../UserContext"


export default function CompteInSideBar() {

  const user = useContext(UserContext);
  return (
    <>
      {
         <div className='compte-in-sidebar'>
            <div className="compte-in-sidebar-avatar"><Avatar src={user.profil} url={"/profil"}/></div>
            <div>
              <div className="compte-icon">
                <p>{user.name}</p>
                <img src={More2} alt="" />
              </div>
              <span className="tweet-title-details">{user.subname}</span>
            </div>
          </div>
      }
    </>
  )
}
