function PostCard({ post }) {

  // console.log(post)

  // return (
  //   <div className="card">
  //     <h2>{post.image}</h2>
  //     <img src={image} alt={name} className="toy-avatar" />
  //     <p>{likes} Likes </p>
  //     <button className="like-btn" onClick={handleLikeClick}>
  //       Like {"<3"}
  //     </button>
  //     <button className="del-btn" onClick={handleDeleteClick}>
  //       Donate to GoodWill
  //     </button>
  //   </div>
  // );

  return (
    <div className="card">
      <img src={post.image} />
      <h3>{post.caption}</h3>
      <h5>{post.user.handle}</h5>
      <p>{post.likes} Likes</p>
      <p>{post.dislikes} Dislikes</p>
      <button className="like-btn">
      👍
      </button>
      
      <button className="like-btn">
      👎
      </button>
    </div>
  )

}

export default PostCard;