import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Base from './component/base';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import NavbarController from './component/NavbarController';
import ForgotPassword from './pages/ForgotPassword';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <ToastContainer/>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/forgot" element={<ForgotPassword />}/>

        
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;
