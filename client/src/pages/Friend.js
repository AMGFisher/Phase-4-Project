import { useEffect, useState } from 'react';
import ProfilePostCard from './ProfilePostCard';



export function Friend({friendProfile}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`/friend/${friendProfile.id}`)
          .then((r) => r.json())
          .then(setPosts);
      }, []);

    console.log(friendProfile.id)

    console.log(posts)

    const profilePostCards = posts.map((post) => (
        <ProfilePostCard 
        key={post.id}
        post={post}
        />
    ))



    
    return <>
    <h1>Friend</h1>
    <div>{profilePostCards}</div>
    </>

}