export function Friends({user}) {

    // console.log(user)
    // console.log(user.followers)
    // console.log(user.following)

    let followers = user.followers

    let following = user.following

    const followingCards = following.map((follow) => (
        <container className="friends">

        <img src={follow.avatar} />
        <h5>{follow.handle}</h5>
        <div>{follow.first_name} {follow.last_name}</div>
        <br></br>
        <button className="logoutBtn">Unfollow</button>
        <br/>
        </container>
    ))

    const followersCards = followers.map((follower) => (
        <container className="followers">

        <img src={follower.avatar} />
        <h5>{follower.handle}</h5>
        <div>{follower.first_name} {follower.last_name}</div>
        </container>
    ))

    return <>
    <h1 className="ff-title">Friends & Followers</h1>
    <hr/>
    <h2 className="ff-title" >People You Follow:</h2>
    <div>{followingCards}</div>
    <hr/>
    <h2>Followers:</h2>
<div>{followersCards}</div>
    </>

    
}

