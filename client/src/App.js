import { Link, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Friends } from './pages/Friends';
import { Inbox } from './pages/Inbox';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Feed } from './pages/Feed';

function App() {
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

      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/friends' element={<Friends />} />
      <Route path='/inbox' element={<Inbox />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </>
  )
}

export default App