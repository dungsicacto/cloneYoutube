import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Component/Navbar/Navbar'
import Home from './Page/Home/Home'


import './App.css'
import Video from './Page/Video/Video'
const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='video' element={<Video />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App