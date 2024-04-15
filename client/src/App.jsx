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
import Profile from './Components/Profile'
import { AppState } from './Context/AgriProvider'
import Lottie from 'react-lottie'
import animationData from './animations/loadingSpinner.json'
import { ToastContainer } from 'react-toastify';
import AddPosts from './Components/AddPosts'
import 'react-toastify/dist/ReactToastify.css';
import CommunityForum from './Pages/CommunityForum'

function App() {
  const { isLoading } = AppState();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className='min-h-[100vh] w-full bg-black bg-opacity-10 backdrop-blur-sm'>
      {isLoading ? (
        <div className='flex z-[100] items-center justify-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
          <div className='flex w-full items-center py-10 justify-center'>
            <Lottie
              options={defaultOptions}
              width={300}
            />
          </div>
        </div>) : (<div />)}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cropassessment' element={<CropAssessment />} />
        <Route path='/weatherinfo' element={<WeatherInfo />} />
        <Route path='/irrigationinfo' element={<IrrigationInfo />} />
        <Route path='/resourcemanagement' element={<ResourceManagement />} />
        <Route path='/weatherInfo' element={<WeatherInfo />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/communityforum' element={<CommunityForum />} />
        <Route path='/addpost' element={<AddPosts />} />
      </Routes>
      <ToastContainer />
    </div >
  )
}

export default App
