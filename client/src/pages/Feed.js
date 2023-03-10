import { useEffect, useState } from 'react';

import FeedCard from './PostCard';

export function Feed({setFriendProfile}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/feed")
          .then((r) => r.json())
          .then(setPosts);
      }, []);

    //   console.log(posts)

      const feedCards = posts.map((post) => (
        <FeedCard
        key={post.id}
        post={post}
        setFriendProfile={setFriendProfile}
        />
      ))

    return <>
    <h1 className="homePageTitle">Personal Feed</h1>
    <div className='postCard'>{feedCards}</div>
    </>
}