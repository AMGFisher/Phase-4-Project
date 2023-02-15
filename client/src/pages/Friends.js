export function Friends({user}) {

    console.log(user)
    console.log(user.followers)
    console.log(user.following)

    let followers = user.followers

    let following = user.following

    const followersCards = followers.map((follower) => (
        <div>{follower.first_name}</div>
    ))

    const followingCards = following.map((follow) => (
        <div>{follow.first_name}</div>
    ))

    return <>
    <h1>Friends & Followers</h1>
    <div>{followersCards}</div>
    <hr/>
    <div>{followingCards}</div>
    </>

    
}