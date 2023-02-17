function ProfilePostCard({ post }) {


  
    return (
      <div className="postProfile">
        <img className="profileImage" src={post.image} />
        <div className="postInfo"></div>
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