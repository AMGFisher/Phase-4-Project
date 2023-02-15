import { Link, Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { Friends } from './Friends';
import { Inbox } from './Inbox';
import { Login } from './Login';
import { Profile } from './Profile';
import { Feed } from './Feed';
import { Signup } from './Signup';
import { useEffect, useState } from 'react';

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/feed'>Personal Feed</Link></li>
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/inbox'>Inbox</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>

      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/friends' element={<Friends />} />
      <Route path='/inbox' element={<Inbox />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login setUser={setUser} />} />
      <Route path='/signup' element={<Signup setUser={setUser} />} />
    </Routes>
    </>
  )
}

export default App