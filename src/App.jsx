import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Editorpage from './pages/Editorpage'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/editor/:roomId' element={<Editorpage></Editorpage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App