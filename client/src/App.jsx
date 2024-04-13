// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CropAssessmentDetails from './Components/CropAssessmentDetails'
import WeatherInfo from './Components/WeatherInfo'
function App() {

  return (
    <div>
      {/* <div>Home</div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cropAssessmentDetails' element={<CropAssessmentDetails />} />
        <Route path='/weatherInfo' element={<WeatherInfo />} />
      </Routes>
    </div>
  )
}

export default App
