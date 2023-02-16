export function Friends({user}) {

    console.log(user)
    console.log(user.followers)
    console.log(user.following)

    let followers = user.followers

    let following = user.following

    const followingCards = following.map((follow) => (
        <>
        <img src={follow.avatar} />
        <div>{follow.first_name} {follow.last_name}</div>
        <button>Unfollow</button>
        <br/>
        </>
    ))

    const followersCards = followers.map((follower) => (
        <>
        <img src={follower.avatar} />
        <div>{follower.first_name} {follower.last_name}</div>
        </>
    ))

    return <>
    <h1>Friends & Followers</h1>
    <hr/>
    <h2>People You Follow:</h2>
    <div>{followingCards}</div>
    <hr/>
    <h2>Followers:</h2>
<div>{followersCards}</div>
    </>

    
}

