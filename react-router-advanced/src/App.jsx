import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter, Route, Routes} from react-router-dom
import ProtectedRoute from './src/components/profile'

function App() {
 

  return (
    <>
      <ProtectedRoute/>
      Route path=", "/blog/:id BlogPost
    </>
  )
}

export default App
