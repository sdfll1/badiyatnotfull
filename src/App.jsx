import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import AboutUser from './pages/About/AboutUser';

function App() {
  const local = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(window.localStorage.getItem('key') !== 'secretkey'){
      navigate('/')
    }
  },[local.pathname])


  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/aboutData' element={<AboutUser />}/>
        </Routes>
    </div>
  );
}

export default App;
