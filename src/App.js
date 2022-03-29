import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFind from './components/NotFind/NotFind';
import Freinds from './components/Friends/Freinds';
import Header from './components/Header/Header';
import FriendDeteles from './components/FriendDeteles/FriendDeteles';
import Posts from './components/post/Posts';
import PostDetail from './components/postdetals/PostDetail';

function App() {
  return (
    <div className="App">

<Header> </Header>

      <Routes>
        <Route path='Menu' element={<Menu/>}>  </Route>
<Route path='About' element={<About/>}> </Route>
<Route path='Home' element={<Home/>}> </Route>
<Route path="/friend/:friendId" element={<FriendDeteles></FriendDeteles>}></Route>
<Route path='Freinds' element={<Freinds></Freinds>}> </Route>
<Route path="/posts" element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>

<Route path='*' element={<NotFind></NotFind>}> </Route>



      </Routes>
   

    </div>
  );
}

export default App;
