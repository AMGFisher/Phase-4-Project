function ProfilePostCard({ post }) {


  
    return (
      <div class="row">
        <div class="column">
          <div className="postProfile">
            <img className="profileImage" src={post.image} />
            <div className="postInfo"></div>
            <p>{post.likes} Likes {post.dislikes} Dislikes</p>
            <button className="like-btn"> like</button>
            <button className="Dis-like-btn">Dislike</button>
            <h3>{post.caption}</h3>
          </div>
        </div>
      </div>
    )
  
  }
  
  export default ProfilePostCard;