function PostCard({ post }) {
    const { id, image, caption, likes, dislikes, user } = post
    
      function handleLikeClick() {
        // const updateObj = {
        //   likes: toy.likes + 1,
        // };
    
        fetch(`/posts/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes: post.likes + 1
          }),
        })
          // .then((r) => r.json())
          // .then((updatedToy) => onUpdateToy(updatedToy));
      }
    
      function handleDislikeClick() {
        // const updateObj = {
        //   likes: toy.likes + 1,
        // };
    
        fetch(`/posts/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dislikes: post.dislikes + 1
          }),
        })
          // .then((r) => r.json())
          // .then((updatedToy) => onUpdateToy(updatedToy));
      }
    
    
      return (
        <div className="card">
          <img src={image} />
          <h3>{caption}</h3>
          <img src={user.avatar} />  
          <h5>@{user.handle}</h5>    
          <p>{likes} Likes</p>
          <p>{dislikes} Dislikes</p>
          <button className="like-btn" onClick={handleLikeClick}>
          👍
          </button>
          
          <button className="like-btn" onClick={handleDislikeClick}>
          👎
          </button>
        </div>
      )
    
    }
    
    export default PostCard;