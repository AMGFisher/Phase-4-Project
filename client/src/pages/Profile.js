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
    <h1>Profile</h1>
    <h2>Handle: @{user.handle}</h2>
    <h3>Name: {user.first_name} {user.last_name}</h3>
    <h4>Contact: {user.email}</h4>
    <div>{profilePostCards}</div>
    </>
    )
}