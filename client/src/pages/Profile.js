// // import { useEffect, useState } from 'react';

// import ProfilePostCard from './ProfilePostCard';

// export function Profile({ user }) {


//     let posts = user.posts

//     // console.log(user)

//     // console.log(user.posts)

//     const profilePostCards = posts.map((post) => (
//         <ProfilePostCard 
//         key={post.id}
//         post={post}
//         />
//     ))

//     return ( <>
//     <h1>Profile</h1>
//     <h2>Handle: @{user.handle}</h2>
//     <h3>Name: {user.first_name} {user.last_name}</h3>
//     <h4>Contact: {user.email}</h4>
//     <div>{profilePostCards}</div>
//     </>
//     )
// }



import { useEffect, useState } from 'react';

import ProfilePostCard from './ProfilePostCard';

export function Profile() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/personal")
          .then((r) => r.json())
          .then(setPosts);
      }, []);

      console.log(posts)

      const [me, setMe] = useState([]);

      useEffect(() => {
          fetch("/me")
            .then((r) => r.json())
            .then(setMe);
        }, []);

        console.log(me)
  


    // console.log(user)

    // console.log(user.posts)

    const profilePostCards = posts.map((post) => (
        <ProfilePostCard 
        key={post.id}
        post={post}
        />
    ))

    return ( <>

    <div className="profile-page">   
    <h1 className="create-title">Personal Profile</h1>
    <img  className="avatar"src={me.avatar} />
    <h2 className="create-title">Handle: @{me.handle}</h2>
    <h3 className="create-title">Name: {me.first_name} {me.last_name}</h3>
    <h4 className="create-title">Contact: {me.email}</h4>

    <div>{profilePostCards}</div>
    </div>
    </>
    )
}