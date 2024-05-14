import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import {Route, Routes} from 'react-router-dom'
import Agregar from './Pages/Agregar/Agregar'
import Lista from './Pages/Lista/Lista'
const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path="/add" element={<Agregar/>} />
          <Route path="/list" element={<Lista/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App