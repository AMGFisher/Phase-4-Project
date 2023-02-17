import { useEffect, useState } from 'react';

import PostCard from './PostCard';

export function Home({setFriendProfile}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts")
          .then((r) => r.json())
          .then(setPosts);
      }, []);

      const postCards = posts.map((post) => (
        <PostCard
        key={post.id}
        post={post}
        setFriendProfile={setFriendProfile}
        />
      ))

    return <>
    <h1 className="homePageTitle">Home</h1>
    <div className='postCard'>{postCards}</div>
    </>
}