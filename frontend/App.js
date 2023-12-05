import LoginScreen from './components/LoginScreen';
import { Routes, Route} from 'react-router-dom';
import OtpScreen from './components/OtpScreen';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProtectedRoute from './components/ProtectedRoute';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import DashboardRoute from './components/DashboardRoute';
import Result from './components/Results';
import Admin from './components/Admin';
import ControlPanel from './components/ControlPanel';
import Status from './components/Status';
import Notice from './components/Notice';
import './App.css';

export default function App(){
  return (
    <>
    <Navbar />
    <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route path='/otp-form' element={<OtpScreen/>} />
      </Route>

      <Route element={<PrivateRoute/>}>
        <Route path='/login' element={<LoginScreen />}></Route>
        
      </Route>

      <Route element = {<DashboardRoute/>}>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Route>
    
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path="/results" element={<Result/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/control-panel" element={<ControlPanel/>}></Route>
      <Route path='/status' element={<Status/>}></Route>
      <Route path='/notice' element={<Notice/>}></Route>
    </Routes>
    </>
  );
}


