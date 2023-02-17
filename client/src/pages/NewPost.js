import { useState } from "react";


export function NewPost() {

    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");

    // console.log(image)
    // console.log(caption)


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image,
            caption,
            likes: 0,
            dislikes: 0,
          }),
        })
        
        // .then((r) => {
        //   setIsLoading(false);
        //   if (r.ok) {
        //     history.push("/");
        //   } else {
        //     r.json().then((err) => setErrors(err.errors));
        //   }
        // });
      }

    
        
    return <>
    <h1 className="create-title">Create New Post</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="image" className="input-caption">Image: </label>
            <input className="input"
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label htmlFor="caption" className="input-caption">Caption: </label>
            <input className="input"
              type="text"
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <button className="postBtn" type="submit">Create New Post</button>
        </form>
        </>
}