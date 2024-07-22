import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToastAzul from './Components/Toast'
import ModalC from './Components/Modal'
import Carrusel from './Components/Carrusel'
import Tabla from './Components/Tabla'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css' 


function App() {

  return (
    
    
    <div>
      <ToastAzul />
      <ModalC />
      <h1>Carrusel</h1>
      <Carrusel/>
      <h1>Tabla</h1>
      <Tabla/>

    

    </div>

  
      
      
    
  )
}

export default App
