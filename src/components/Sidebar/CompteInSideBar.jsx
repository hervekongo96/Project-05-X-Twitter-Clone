import Avatar from "../TimeLine/Avatar"
import More2 from "/images/More-2.svg"
import user from "../../Data/initial-data.json"


export default function CompteInSideBar() {
  return (
    <>
      {
         <div className='compte-in-sidebar'>
            <div className="compte-in-sidebar-avatar"><Avatar src={user.currentuser.profil} url={"/profil"}/></div>
            <div>
              <div className="compte-icon">
                <p>{user.currentuser.name}</p>
                <img src={More2} alt="" />
              </div>
              <span className="tweet-title-details">{user.currentuser.subname}</span>
            </div>
          </div>
      }
    </>
  )
}
