import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFind from './components/NotFind/NotFind';

function App() {
  return (
    <div className="App">

<h1> Hello Router</h1>

      <Routes>
        <Route path='Menu' element={<Menu/>}>  </Route>
<Route path='About' element={<About/>}> </Route>
<Route path='Home' element={<Home/>}> </Route>
<Route path='*' element={<NotFind></NotFind>}> </Route>



      </Routes>
   

    </div>
  );
}

export default App;
