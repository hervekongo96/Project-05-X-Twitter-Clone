import { NavLink } from "react-router-dom"

function Navigation({src, url, texte}) {
  return (
    <NavLink to={url} className="navLink">
        <img src={src} />
        <p>{texte}</p>
    </NavLink>
  )
}

export default Navigation