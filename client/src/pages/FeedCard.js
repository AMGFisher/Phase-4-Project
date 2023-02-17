import { useNavigate } from 'react-router-dom'

function FeedCard({ post, setFriendProfile}) {
  const { id, image, caption, likes, dislikes, user } = post

  const navigate = useNavigate()

  
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

    function userProfile() {
      setFriendProfile(user)
  
      navigate("/friend")
      
      }
  
  
    return (
      <div className="card">
        <img src={user.avatar} className="avatar" onClick={userProfile} />
        <h5 className="userHandle">@{user.handle}</h5>    
        <img src={image} className="postImage" />
        <button className="like-btn" onClick={handleLikeClick}>
        like
        </button>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button className="Dis-like-btn" onClick={handleDislikeClick}>
        Dislike
        </button>
        <p className="likes">{likes} Likes</p>
        <p className="disLikes">{dislikes} Dislikes</p>
        <h3 className="caption">{user.handle} - {caption}</h3>
      </div>
    )
  
  }
  
  export default FeedCard;