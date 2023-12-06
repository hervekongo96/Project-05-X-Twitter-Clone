import followData from "../Data/FollowData"


function TrendsFollo() {
    return (
        <>
          {
            followData.map(follow =>(
              <div className="follow-list" key={follow.key}>
                <div className="follow-title">
                    <img src={follow.avatar} alt="" />
                    <div className="follow-list-title">
                        <div>
                          <span>{follow.title}</span>
                          <p className="tweet-title-details">{follow.author}</p>
                        </div>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
              </div>
            ))
          }
         <span className="trendslist-button">Show more</span>
        </>
      )
}

export default TrendsFollo