import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/Login'
import Browse from './components/Browse'
import Header from './components/Header'


function App() {

  return (
    
       <BrowserRouter>
             <Routes>
               
               <Route path='/' element={<Login/>} />
               <Route path='/browse' element={<Browse/>} /> 
             </Routes>
        </BrowserRouter>
   
  
  )
}

export default App
