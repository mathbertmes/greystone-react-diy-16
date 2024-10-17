import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Profile from './components/profile';
import NotFound from './components/not-found';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  );
}

export default App;
