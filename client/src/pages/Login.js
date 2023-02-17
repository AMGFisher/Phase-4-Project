import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/feed")

      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="create-title">Login</h1>
        <div>
        <label classname="top"
        htmlFor="email" className="input-caption">Email: </label>
        <input className="input"
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ></input>
        <label htmlFor="password" className="input-caption" >Password: </label>
        <input className="input"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="postBtn">Login</button>
        </div> 
        </form>
    </div>
  );
}