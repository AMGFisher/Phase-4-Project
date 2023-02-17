import { useEffect, useState } from 'react';

import PostCard from './PostCard';

export function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts")
          .then((r) => r.json())
          .then(setPosts);
      }, []);

      console.log(posts)

      const postCards = posts.map((post) => (
        <PostCard
        key={post.id}
        post={post}
        />
      ))

    return <>
    <h1 className="homePageTitle">Home</h1>
    <div className='postCard'>{postCards}</div>
    </>
}