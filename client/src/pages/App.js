import { Link, Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { Friends } from './Friends';
import { Inbox } from './Inbox';
import { Login } from './Login';
import { Profile } from './Profile';
import { Feed } from './Feed';
import { Signup } from './Signup';
import { useEffect, useState } from 'react';
import { NewPost } from './NewPost';
import './App.css';


function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


  console.log(user)

  return (
    <>
    <nav className="navBar">
      {user ? <> <h3>Welcome, {user.first_name}!</h3>
      <button ClassName="logoutbtn" onClick={handleLogout}>Logout</button>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/newpost'>Create New Post</Link></li>
        <li><Link to='/feed'>Personal Feed</Link></li>
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/inbox'>Inbox</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        {/* <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li> */}
        
      </ul> </> : <> <h3>Welcome! Browse, Login, or Signup to Continue:</h3>
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </ul>
      </>
      }
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newpost' element={<NewPost />} />
      <Route path='/feed' element={<Feed user={user} />} />
      
      <Route path='/friends' element={<Friends user={user} />} />
      <Route path='/inbox' element={<Inbox user={user} />} />
      <Route path='/profile' element={<Profile user={user} />} />
      <Route path='/login' element={<Login setUser={setUser} />} />
      <Route path='/signup' element={<Signup setUser={setUser} />} />
    </Routes>
    </>
  )
}

export default App