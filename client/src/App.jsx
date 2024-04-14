// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import CropAssessment from './Pages/CropAssessment'
import WeatherInfo from './Pages/WeatherInfo'
import IrrigationInfo from './Pages/IrrigationInfo'
import ResourceManagement from './Pages/ResourceManagement'
import CropAssessmentDetails from './Components/CropAssessmentDetails'
import Profile from './Components/Profile';
function App() {

  return (
    <div className='h-[100vh] w-full bg-black bg-opacity-10 backdrop-blur-sm'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cropassessment' element={<CropAssessment />} />
        <Route path='/weatherinfo' element={<WeatherInfo />} />
        <Route path='/irrigationinfo' element={<IrrigationInfo />} />
        <Route path='/resourcemanagement' element={<ResourceManagement />} />
        <Route path='/cropAssessmentDetails' element={<CropAssessmentDetails />} />
        <Route path='/weatherInfo' element={<WeatherInfo />} />
        <Route path='/resourceManagement' element={<ResourceManagement/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App
