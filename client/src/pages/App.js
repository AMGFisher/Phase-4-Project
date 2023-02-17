import { Link, Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { Friends } from './Friends';
import { Inbox } from './Inbox';
import { Login } from './Login';
import { Profile } from './Profile';
import { Feed } from './Feed';
import { Friend } from './Friend';
import { Signup } from './Signup';
import { useEffect, useState } from 'react';
import { NewPost } from './NewPost';
import { useNavigate } from "react-router-dom";
import './App.css';


function App() {
  const navigate = useNavigate()
  
  const [user, setUser] = useState(null);
  const [friendProfile, setFriendProfile] = useState(null);

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
        navigate("/")
        setUser(null)
      }
    });
  }


  return (
    <>
    <nav className="navBar">
      <img className="logo" src='/PFSLogo.png' width="10%"/>
      {user ? <> <h3 className="welcome">Welcome, {user.first_name}!</h3>
      <div className="taskBar">
        <button className="homeBtn"><Link className="link-text" to='/'>Home</Link></button>
        <button className="personalFeedBtn"><Link className="link-text" to='/feed'>Feed</Link></button>
        <button className="creatPostBtn"><Link className="link-text" to='/newpost'>Post</Link></button>
        <button className="friendsBtn"><Link className="link-text" to='/friends'>Friends</Link></button>
        <button className="inboxBtn"><Link className="link-text" to='/inbox'>Inbox</Link></button>
        <button className="profileBtn"><Link className="link-text" to='/profile'>Profile</Link></button>
        <button className="logoutBtn" onClick={handleLogout}>Logout</button>
        </div>
        

        {/* <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li> */}
        
     </> : <> <h3 className="intro">Welcome! Browse, Login, or Signup to Continue:</h3>
      <button className="preLogHome"><Link className="link-text" to='/'>Home</Link></button>
      <button className="login"><Link className="link-text" to='/login'>Login</Link></button>
        <button className="signup"><Link className="link-text" to='/signup'>Signup</Link></button>
      </>
      }
    </nav>
    <Routes>
      <Route path='/' element={<Home setFriendProfile={setFriendProfile} />} />
      <Route path='/newpost' element={<NewPost />} />
      <Route path='/feed' element={<Feed user={user} setFriendProfile={setFriendProfile} />} />
      <Route path='/friend' element={<Friend friendProfile={friendProfile} />} />
      
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