import Avatar from "./Avatar"

export default function CompteInSideBar() {
  return (
    <div className='compte-in-sidebar'>
        <div className="compte-in-sidebar-avatar"><Avatar /></div>
        <div>
            <p>Bradly Ortiz</p>
            <span className="tweet-title-details">@bradly</span>
        </div>
    </div>
  )
}
