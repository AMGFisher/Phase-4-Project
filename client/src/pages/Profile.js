// import { useEffect, useState } from 'react';

import ProfilePostCard from './ProfilePostCard';

export function Profile({ user }) {


    let posts = user.posts

    // console.log(user)

    // console.log(user.posts)

    const profilePostCards = posts.map((post) => (
        <ProfilePostCard 
        key={post.id}
        post={post}
        />
    ))

    return ( <>
    <h1 className="create-title">Profile</h1>
    <h2 className="create-title">Handle: @{user.handle}</h2>
    <h3 className="create-title">Name: {user.first_name} {user.last_name}</h3>
    <h4 className="create-title">Contact: {user.email}</h4>
    <div>{profilePostCards}</div>
    </>
    )
}