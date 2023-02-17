import FeedCard from './FeedCard';
import { useEffect, useState } from 'react';

export function Feed({user}) {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch("/follows")
          .then((r) => r.json())
          .then(setPosts);
      }, []);

    console.log(posts)


    return <h1>Personal Feed</h1>


}




// export function Home() {

//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch("/posts")
//           .then((r) => r.json())
//           .then(setPosts);
//       }, []);

//       console.log(posts)

//       const postCards = posts.map((post) => (
//         <PostCard
//         key={post.id}
//         post={post}
//         />
//       ))

//     return <>
//     <h1>Home</h1>
//     <div>{postCards}</div>
//     </>
// }