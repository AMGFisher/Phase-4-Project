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
    <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="image">Image: </label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label htmlFor="caption">Caption: </label>
            <input
              type="text"
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <button type="submit">Create New Post</button>
        </form>
        </>
}