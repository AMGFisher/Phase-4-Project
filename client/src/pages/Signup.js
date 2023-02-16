import { useState } from "react";

export function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [handle, setHandle] = useState("");

  // const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
        first_name: first,
        last_name: last,
        handle
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }

  return (
    <>
    <h1>Sign Up</h1>
    <div>
      <form onSubmit={handleSubmit}>

      <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <label htmlFor="password">Password Confirmation: </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <br />

      
        <label htmlFor="first">First Name: </label>
        <input
          type="text"
          id="first"
          autoComplete="off"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <br />

        <label htmlFor="last">Last Name: </label>
        <input
          type="text"
          id="last"
          autoComplete="off"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <br />

        <label htmlFor="handle">Creative Social Media Handle: </label>
        <input
          type="text"
          id="handle"
          autoComplete="off"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
}