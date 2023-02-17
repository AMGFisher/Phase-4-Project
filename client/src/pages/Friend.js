import { useEffect, useState } from 'react';
import ProfilePostCard from './ProfilePostCard';



export function Friend({friendProfile}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`/friend/${friendProfile.id}`)
          .then((r) => r.json())
          .then(setPosts);
      }, []);

    console.log(friendProfile)

    const profilePostCards = posts.map((post) => (
        <ProfilePostCard 
        key={post.id}
        post={post}
        />
    ))



    
    return <>
    <h1>@{friendProfile.handle}</h1>
    <img src={friendProfile.avatar} />
    <h2>{friendProfile.first_name} {friendProfile.last_name}</h2>
    <div>{profilePostCards}</div>
    </>

}