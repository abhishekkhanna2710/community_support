import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  )
}

export default App
