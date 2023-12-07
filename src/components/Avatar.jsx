import Navigation from "./Navigation"

export default function Avatar() {
  return (
    <div className="avatar">   
      <div className="avatar3">
        <img src="src/images/profile-photo.png" alt="profil" />
        <Navigation texte={"click"} url={"/profil"} className="avatar2" />
      </div>
    </div>
  )
}

