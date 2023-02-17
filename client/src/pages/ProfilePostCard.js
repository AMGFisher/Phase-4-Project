function ProfilePostCard({ post }) {


  
    return (
      <div className="postCard">
        <img src={post.image} />
        <p>{post.likes} Likes</p>
        <p>{post.dislikes} Dislikes</p>
        <button className="like-btn">
        like
        </button>
        
        <button className="Dis-like-btn">
        Dislike
        </button>
        <h3>{post.caption}</h3>
      </div>
    )
  
  }
  
  export default ProfilePostCard;