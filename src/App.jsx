
import Loginpage from './pages/Loginpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Charts from './components/Charts/Charts'
import Createform from './components/Createform/Createform'
import Home from './components/Home/Home'
import Showtable from "./components/Showtable/Showtable"
function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="" element={<Home/>}>
            <Route path="" element={<Charts />} />
            <Route path="addroles" element={<Createform />} />
            <Route path='showroles' element={<Showtable/>} />
          </Route>

        </Route>
        <Route path="/addrole" index element={<Createform />} />
      </Routes>

    </BrowserRouter>



  )
}

export default App
