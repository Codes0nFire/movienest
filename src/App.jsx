import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/Login'
import Browse from './components/Browse'
import Details from './components/Details'
import Trailer from './components/Trailer'


function App() {

  return (
    
       <BrowserRouter>
             <Routes>
               
               <Route path='/' element={<Login/>} />
               <Route path='/browse' element={<Browse/>} /> 
               <Route path='/details/:id' element={<Details/>} />
               <Route path='/trailer/:id' element={<Trailer/>} /> 
             </Routes>
        </BrowserRouter>
   
  
  )
}

export default App
